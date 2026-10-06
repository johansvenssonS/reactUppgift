import { useQuery } from "@tanstack/react-query";

export const fetchUsers = async () => {
  const response = await fetch("/users.JSON");
  if (!response.ok)
    throw new Error("Kunde inte hämta användare" + response.status);
  return response.json();
};

//för att återanvända den cachade datan som hämtas vid Users route
//för att använda i specfika routen, cachade på nyckeln "users"

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: Infinity,
  });
};

// Nominatim tillåter max 1 anrop per sekund.
// Skydd mot massanrop:
// 1. alla anrop går genom en kö, ett i taget med paus emellan
// 2. svar sparas i localStorage, så samma adress hämtas bara en gång
// 3. vid fel (t.ex. 429) kastas felet och loopen avbryts
const NOMINATIM_DELAY_MS = 1100;
const CACHE_PREFIX = "cords:";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let queue = Promise.resolve();
let requestCount = 0;

const readCache = (key) => {
  try {
    const value = localStorage.getItem(CACHE_PREFIX + key);
    return value === null ? undefined : JSON.parse(value);
  } catch {
    return undefined;
  }
};

const writeCache = (key, value) => {
  try {
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(value));
  } catch {
    // localStorage kan vara avstängt, då hämtar vi bara igen nästa gång
  }
};

export const getUserCords = async (adress) => {
  const userAdressDetails = new URLSearchParams({
    street: adress.street,
    city: adress.city,
    postalcode: adress.zipCode.replaceAll(" ", ""),
    country: "Sweden",
    format: "json",
    limit: "1",
  });
  const cacheKey = userAdressDetails.toString();

  const cached = readCache(cacheKey);
  if (cached !== undefined) return cached;

  // ställ anropet i kön, nästa anrop får vänta tills detta är klart + paus
  const request = queue.then(async () => {
    requestCount++;
    console.log(
      `Nominatim-anrop #${requestCount}: ${adress.street}, ${adress.city}`,
    );
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?${userAdressDetails}`,
    );
    if (!res.ok) throw new Error("Nominatim svarade " + res.status);
    const data = await res.json();

    if (data.length === 0) {
      return null; // hittade inte koordinater för adressen
    }
    return { lat: Number(data[0].lat), lng: Number(data[0].lon) };
  });
  queue = request.catch(() => {}).then(() => sleep(NOMINATIM_DELAY_MS));

  const cords = await request;
  writeCache(cacheKey, cords);
  return cords;
};

export const getAllUsersLocation = async (users) => {
  const results = [];
  for (const user of users) {
    const cords = await getUserCords(user.profile.address);
    if (cords) {
      results.push({ ...user, cords });
    }
  }
  return results;
};

export const useUsersLocation = (users) => {
  return useQuery({
    queryKey: ["usersLocation"],
    queryFn: () => getAllUsersLocation(users),
    enabled: !!users, // vänta tills users finns
    staleTime: Infinity, // hämta bara en gång
    gcTime: Infinity, // släng inte cachen när kartan inte visas
    retry: false, // försök inte igen vid fel, det skulle ge fler anrop
  });
};

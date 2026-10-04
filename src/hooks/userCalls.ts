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

# Uppgift: Individuell Projektuppgift — Users App

> Transcribed from `slides/inbox/uppgift react.pdf` (1 page).

**Teknikhögskolan i Lund** · Kurs: React (30yhp) · Omfattning: Inlämningsuppgift
**Start:** 30 september 2026 kl. 13:00 · **Deadline:** 6 oktober 2026 kl. 23:59

## Bakgrund & Syfte

Uppgiften syftar till att ge dig praktisk erfarenhet av att utveckla en komplett
React-applikation, från grundläggande komponentstruktur till avancerad datahämtning och
navigation. Du kommer att tillämpa kunskaper inom API-integration, typning med TypeScript
och routning för att skapa en robust användarupplevelse. Uppgiften är utformad för att
simulera en vanlig arbetsuppgift inom frontend-utveckling.

## Uppdragsbeskrivning

Ditt uppdrag är att under en veckas tid utveckla en enskild sidbaserad applikation (SPA)
med React som interagerar med ett externt REST-API. Applikationen ska hämta och presentera
användardata på ett överskådligt sätt, samt erbjuda navigation mellan minst två olika vyer.
Fokus ligger på att demonstrera din förmåga att strukturera en modern React-app, hantera
asynkron data och säkerställa kodkvalitet med TypeScript.

Projektet är designat för att testa dina färdigheter i att bygga skalbara och
underhållbara frontend-lösningar. Du kommer att arbeta självständigt för att leverera en
funktionell och välstrukturerad applikation som uppfyller angivna krav för både
funktionalitet och teknik. Var noga med att hantera API:ets anropsbegränsning.

## Funktionell kravspecifikation

Följande krav måste uppfyllas för godkänt betyg:

### 1. Gränssnitt och Navigation

- Applikationen ska innehålla minst två distinkta vyer/sidor som nås via `react-router-dom`.
- En tydlig och intuitiv navigationsstruktur ska finnas för att enkelt växla mellan sidorna.
- Användardata hämtad från API:t ska presenteras på ett överskådligt och läsbart sätt i
  gränssnittet.

### 2. Datahantering

- Data ska hämtas från det angivna API:et:
  `https://api-userapi.onrender.com/api/users/getUsers`.
- Applikationen ska visuellt hantera olika tillstånd vid datahämtning (t.ex. laddning,
  felmeddelanden, tomma dataset).
- Effektiv användning av `useQuery` ska demonstreras för att minimera onödiga API-anrop och
  respektera anropsgränsen på max 100 anrop per dag.

### 3. Komponentstruktur

- Applikationen ska vara uppbyggd med modulära och återanvändbara React-komponenter.
- Separation av ansvar (Separation of Concerns) ska tillämpas för att organisera koden
  logiskt.

## Tekniska krav

- Använd React.js för att bygga frontend-applikationen.
- Alla komponentprops ska vara strikt typade med TypeScript (t.ex. genom interfaces eller
  types).
- Datahämtning och caching ska hanteras med `useQuery` (rekommenderas TanStack Query).
- Routing ska implementeras med `react-router-dom` för minst två distinkta sidor.
- API-anrop ska inkludera HTTP-headern `x-api-key` med värdet `elev-hemlighet-2026`.
- Applikationen måste respektera och implementera lösningar för API:ets anropsgräns på
  maximalt 100 anrop per dag. Cachelagring via `useQuery` är ett bra sätt att hantera detta.
- Projektet ska versionshanteras med Git och pushas till ett privat eller publikt
  GitHub-repository.
- Koden ska följa goda principer för ren kod, läsbarhet, modularitet och underhållbarhet.

## Inlämning

Ditt projekt ska levereras senast **2026-10-06 kl. 23:59**. Inlämningen sker genom att du
länkar till ditt GitHub-repository via kursens inlämningsportal (exakt länk meddelas i
kursrummet). Se till att din slutgiltiga kod ligger på `main`-grenen vid deadline.

Den individuella redovisningen för läraren sker den **7 oktober 2026 kl. 09:00**. Var
beredd att demonstrera din applikation, förklara dina tekniska val, och svara på frågor
kring din kod och implementering. Startdatum för uppgiften är 2026-09-30 kl. 13:00.

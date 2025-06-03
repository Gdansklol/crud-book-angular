# Responsiv CRUD-applikation med tokenhantering

## Byggd med Angular 18 för front-end

### Krav
- En lista över böcker (CRUD-funktionalitet)

- Formulär för att lägga till, redigera och radera böcker

- Tokenbaserad autentisering (JWT)

- Separat vy för "Mina citat"

- Responsiv design för alla skärmstorlekar

- Användning av Bootstrap och Font Awesome för layout och UI

### Setup & Deploy – Tekniska steg

1. Angular CLI installation
```bash
npm install -g @angular/cli

```
Eller installera projektet lokalt:

```bash
npx @angular/cli@latest new crud-temp --routing --style=css

```
> OBS! Du kan inte skapa direkt i den aktuella katalogen (.). 
Du måste alltid skapa en ny mapp, flytta till den och sedan skapa.

2. Ansluter Lokalt Git och GitHub

```bash
git init
git remote add origin https://github.com/DittAnvändarnamn/ditt-repo.git
git add .
git commit -m "init commit"
git push -u origin main

```
> Om felet: remote origin already exists eller repository not found 
uppstår, kontrollera med git remote -v och korrigera.

3. Köra Angular-utvecklingsservern

```bash
npm install
npm start

Öppna i webbläsaren: http://localhost:4200
```

4. Deploy i Varcel 
```bash
npm run build
```

- Använd dist/-katalogen efter build.

- Åtkomst till https://vercel.com

- Anslut GitHub-repository

- Framework: Välj Angular

- Build-kommando: ng build

- Output-katalog: dist/[projektnamn]

### Struktur

```bash
src/
│
├── app/
│   ├── components/       # UI-komponenter
│   ├── pages/            # Bokvy, citatsida
│   ├── services/         # API- och auth-tjänster
│   ├── app.routes.ts     # Routing
│   └── app.component.ts  # Rotkomponent
│
├── assets/               # Bilder, ikoner
├── environments/         # API URL etc.
└── main.ts               # Startpunkt

```

### Utmaning & lärande

### Technologies & Funktionalitet
1. Angular 18 – komponentbaserad UI

2. Bootstrap – responsiv layout

3. Font Awesome – UI-ikoner

4. JWT – autentisering

5. RxJS – datahantering

6. Angular Router – klientbaserad navigation

###  Sammanfattning
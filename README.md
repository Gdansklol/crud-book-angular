# Responsiv CRUD-applikation med tokenhantering

![Angular](https://img.shields.io/badge/Angular-18-red)
![MadeWith](https://img.shields.io/badge/made%20with-TypeScript-blue)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)

##  Live Demo

- 🔗 [Frontend på Vercel](https://crud-book-angular.vercel.app)  
- 🔗 [Swagger (API-dokumentation)](https://dotnet-backend-production-9189.up.railway.app/swagger)  
- 🔗 [GET alla böcker](https://dotnet-backend-production-9189.up.railway.app/api/books)

> Frontend är kopplad till ett REST API byggt med .NET 9 och deployat via Railway.

---

##  Mitt arbetssätt

-  Lärde mig Angular och .NET från grunden
-  Iterativ utveckling: små steg, test tidigt
-  Testade varje komponent responsivt (mobil, tablet, desktop)
-  Refaktorering och förbättringar genom feedback
-  Enkel mock-backend fallback vid API-nedtid

---

##  Funktioner

-  Full CRUD (GET, POST, PUT, DELETE)
-  Lokal tokenhantering via `localStorage,sessionStorage`
-  Lista och formulär för böcker
-  Responsiv UI med Bootstrap & Font Awesome
-  Routing via Angular Router

---
## 🛠️ Teknisk stack

| Layer       | Teknik                         |
|-------------|---------------------------------|
| Frontend    | Angular 18, TypeScript          |
| Backend     | .NET 9 REST API (mock-data)     |
| Hosting     | Vercel (frontend), Railway (API)|
| UI          | Bootstrap 5, Font Awesome       |


---

## 🏗️ Projektstruktur

```bash
src/
├── app/
│   ├── components/    # UI-komponenter (form, lista)
│   ├── pages/         # vyer (book-list, auth)
│   ├── services/      # book.service.ts, auth.service.ts
│   └── app.routes.ts
├── assets/
└── environments/
```

## Setup & Deployment
### Installera & kör lokalt
```bash

npm install
npm start
```
- Gå till: http://localhost:4200

### Deploy med Vercel
```bash

npm run build

```
- Output: dist/crud-temp
- Anslut till GitHub och konfigurera via vercel.com
- Inställningar:

- Framework: Angular

- Build: ng build

- Output folder: dist/crud-temp

### Lärdomar & Utmaningar
- Första gången med Angular och .NET – brant men lärorik kurva

- Skapa fungerande API + Swagger + mock-backend

- Hantera responsivitet och forms med validering

###  Framtida förbättringar
- JWT-autentisering (planeras)

- MongoDB-anslutning i produktion

- Pagination och sökning i boklistan



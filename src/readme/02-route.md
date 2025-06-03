## Skapa en korrekt standalone-komponent i Angular 18
Om du av misstag har skapat en fil som home.ts istället för en fullständig komponent (home.component.ts, home.component.html osv), kan du enkelt åtgärda det med rätt Angular CLI-kommando.

## Problem
Du har kanske fått enbart home.ts eller home.html, home.css, men inte de rätta filnamnen som Angular förväntar sig:

```bash

src/app/pages/home/
├── home.ts
├── home.html
├── home.css
```

Cannot find module './pages/home/home.component'

## Lösning: Skapa komponenten korrekt
Använd följande CLI-kommando för att generera en standalone-komponent med rätt namn och struktur:

```bash
ng generate component pages/home --standalone --flat=false --type=component
```


## Förklaring av flaggorna:

Flagga	Betydelse
--standalone	Skapar komponenten utan NgModule
--flat=false	Lägger komponenten i en egen undermapp (/home/)
--type=component	Använder suffixet .component.ts i filnamnet

-  Rätt resultat
```bash

src/app/pages/home/
├── home.component.ts
├── home.component.html
├── home.component.css
├── home.component.spec.ts
```


```ts
import { HomeComponent } from './pages/home/home.component';
```


## Tips
Använd alltid `ng generate (eller ng g)` istället för att skapa filer manuellt

Standalone-komponenter kräver att du lägger till dem i imports: [], inte declarations


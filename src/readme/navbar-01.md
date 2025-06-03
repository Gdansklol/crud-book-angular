#  Responsiv Navigationskomponent med Mörkt/Ljust Läge (Angular 18)

Detta är en viktig del i mitt CRUD-bokprojekt där jag har implementerat en **responsiv navigationsbar** med **mörkt/ljust läge**, byggt med **Angular 18**, **Bootstrap 5** och **FontAwesome**. Jag har verkligen försökt förstå varje steg – både CLI-kommandon, komponentstruktur och logik bakom state management.

---

##  Teknisk Stack

- **Angular 18 (standalone-komponenter)**
- **Bootstrap 5** – responsiv design och navbar
- **FontAwesome** – ikon för bok
- **SCSS/CSS** – stilhantering
- **Karma + Jasmine** – testmiljö
- **DOM-manipulation** – `document.body.classList`

---

## Funktionalitet

| Funktion              | Beskrivning |
|-----------------------|-------------|
| Navigationsbar        | Responsiv navbar med logotyp, länkar, toggle-knapp |
| Ljust/Mörkt läge      | Toggle-knapp som ändrar hela layoutens tema |
| Standalone-komponent  | Modern Angular-syntax utan modul-deklaration |
| Dynamisk DOM-styling  | `document.body.classList.toggle('dark-mode')` |
| FontAwesome-ikon      | `<i class="fas fa-book-open"></i>` för tydlig boksymbol |

---

##  Min inlärning

Jag har kämpat med många delar i detta moment:

- ❓ Varför `standalone: true` kräver `imports` i stället för `declarations`
- ❓ Hur `toggleDarkMode()` fungerar och varför den är `void`
- ❓ Hur DOM-styling i Angular fungerar i motsats till Reacts `useState`
- ❓ Skillnaden mellan `templateUrl` och inline `template`
- ❓ Varför min `navigation-bar` inte visades först (ordningen på import och selektor)
- ✔️ Hur man kopplar ihop Angular CLI, Bootstrap, FontAwesome och egen stil

---

##  Kodförklaring

### `navigation-bar.component.ts`

```ts
@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  isDarkMode = false;

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}
```

-  void används här eftersom funktionen inte returnerar
 något – den ändrar bara tillståndet och DOM-klassen.


### Jämförelse: Angular vs React

| Koncept         | Angular                               | React                          |
| --------------- | ------------------------------------- | ------------------------------ |
| Tillstånd       | `isDarkMode = false`                  | `useState(false)`              |
| Stateändring    | `this.isDarkMode = !this.isDarkMode`  | `setIsDarkMode(prev => !prev)` |
| DOM-hantering   | `document.body.classList.toggle(...)` | Samma                          |
| Template-render | `{{ isDarkMode ? '☀️' : '🌙' }}`      | `{isDarkMode ? '☀️' : '🌙'}`   |


#### Angular 18 – Standalone Struktur med bootstrapApplication
#### Nyckelpunkter
- bootstrapApplication() ersätter NgModule i Angular 18.

- AppComponent måste deklareras med standalone: true.

- provideRouter([]) förbereder routing.

- provideHttpClient() möjliggör HTTP-kommunikation.


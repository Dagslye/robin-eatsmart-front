import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
// Fichier main.ts
import './style.css'
interface Plat {
  id: number;
  nom: string;
  prix: number;
  description?: string; 
}

const Pizzaanchnoi23cm: Plat = {
  id: 1,
  nom: "Pizza aux anchois, 23cm",
  prix: 12.5
};
  const Pizzaanchnoi33cm: Plat = {
  id: 1,
  nom: "Pizza aux anchois, 33cm",
  prix: 12.5
};
  const Pizzaemental23cm: Plat = {
  id: 1,
  nom: "Pizza emental, 23cm",
  prix: 12.5
};

const appDiv = document.querySelector<HTMLDivElement>('#app');

const produits: Plat[] = [Pizzaanchnoi23cm, Pizzaanchnoi33cm, Pizzaemental23cm];

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
if (appDiv) {
  const listeHTML = produits.map(p => `
    <div class="card">
      <h3 class="menu-container">${p.nom}</h3>
      <p>${p.description ?? 'Pas de description'}</p>
      <p class=""><strong>${p.prix}€</strong></p>
    </div>
  `).join('');

    appDiv.innerHTML = `
    <h1>Eatsmart - Carte du réstaurant (${produits.length} plats)</h1>
    <header class="menu-container">
    ${listeHTML}
    </header>
  `;
}


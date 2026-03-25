import './style.css' 

interface Plat { // Sert a savoir quoi prendre des Plat , et comment les afficher
  id: number;
  nom: string;
  prix: number;
  description?: string; 
}

const Pizzaanchnoi23cm: Plat = { //Un plat hardcodé
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

const appDiv = document.querySelector<HTMLDivElement>('#app'); //Selectione dans le html l'id app
const produits: Plat[] = [Pizzaanchnoi23cm, Pizzaanchnoi33cm, Pizzaemental23cm];

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

  //-----------------------------------------------------------------------------------------------------
  //V2
  //-----------------------------------------------------------------------------------------------------

    async function chargerDonnées(): Promise<ArticleDTO[]> {
    const res = await fetch('https://api.eatsmart.fr/articles');
    return await res.json();
  }
  interface ArticleDTO {
    id_article: number;
    nom: string;
    prix: number;
  }

  async function init() { //fonction async init, pour commencer fetch bdd
    console.log("Loading menu"); //info
    const menuData = await chargerDonnées();
    const appDiv = document.querySelector<HTMLDivElement>(`#app`);
    if (appDiv) {
      appDiv.innerHTML = menuData.map(art =>`)
      <li> 
        <strong>${art.nom}</strong> - ${art.nom}€
        (Réf: ${art.id_article})
      </li>
    `).join('');
    }
  }
  init();


}


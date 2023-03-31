const image = document.querySelector("#superheroImage");
const name = document.querySelector("#name");
const work = document.querySelector("#work");
const searchInput = document.querySelector("#searchInput");
const Searchbutton = document.querySelector("#Searchbutton");

console.log("Welcome");
let superHeroId;

const getSuperHero = async () => {
  await fetch(
    `https://superheroapi.com/api.php/3450372108580590/${superHeroId}`
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      image.innerHTML = `<img src= "${json.image.url}" width=200 />`;
      name.innerHTML = `${json.name}`;
      work.innerHTML = json.work.occupation;
    });
};
Searchbutton.addEventListener("click", () => {
  superHeroId = searchInput.value;
  getSuperHero();
});

searchInput.addEventListener("keyup", function(e){
  
  if (e.key === "Enter") {
    superHeroId = searchInput.value;
    getSuperHero();
  }
});

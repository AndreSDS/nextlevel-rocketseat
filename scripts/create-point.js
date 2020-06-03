window.addEventListener("DOMContentLoaded", (event) => {
  function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((res) => res.json())
      .then((states) => {
        for (const state of states) {
          ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
        }
      });
  }
  populateUFs();

  function getCities(event) {
    const citySelect = document.querySelector("select[name=city]");
    const stateInput = document.querySelector("input[name=state]");

    const ufValue = event.target.value;

    const indexState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexState].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    fetch(url)
      .then((res) => res.json())
      .then((cities) => {
        citySelect.disabled = false;
        for (const city of cities) {
          citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`;
        }
      });
  }

  document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities);
});

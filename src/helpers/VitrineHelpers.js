export function getVitrines() {
  const ListaVitrineLocalStorage = localStorage.getItem('Vitrines');
  if (typeof ListaVitrineLocalStorage == 'string') {
    return JSON.parse(ListaVitrineLocalStorage)
  }
  return [];
};

export function setVitrines(listaVitrine) {
  localStorage.setItem('Vitrines', JSON.stringify(listaVitrine));
};

export function getVitrineByCode(code) {
  const ListaVitrineLocalStorage = localStorage.getItem('Vitrines');
  if (typeof ListaVitrineLocalStorage == 'string') {
    const listaVitrineParsed = JSON.parse(ListaVitrineLocalStorage);
    const vitrineLocalizada = listaVitrineParsed.find((vitrine) => vitrine.code === code)
    if (vitrineLocalizada && vitrineLocalizada.code) {
      return vitrineLocalizada;
    };
    return false;
  };
  return false;
};

export function updateVitrine(vitrine) {
  const ListaVitrineLocalStorage = localStorage.getItem('Vitrines');
  if (typeof ListaVitrineLocalStorage == 'string') {
    const listaVitrineParsed = JSON.parse(ListaVitrineLocalStorage);
    const listaAlterada = listaVitrineParsed.map((item) => {
      if (item.code === vitrine.code) {
        item = vitrine
      }
      return item;
    });
    setVitrines(listaAlterada);
  };
}
export function deleteVitrine(code) {
  const ListaVitrineLocalStorage = localStorage.getItem('Vitrines');
  if (typeof ListaVitrineLocalStorage == 'string') {
    const listaVitrineParsed = JSON.parse(ListaVitrineLocalStorage);
    const listaDeletada = listaVitrineParsed.filter((item) => item.code !== code);
    localStorage.setItem('Vitrines', JSON.stringify(listaDeletada))
      return listaDeletada;
  };
};
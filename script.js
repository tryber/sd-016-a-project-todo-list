function createP() {
  const sel = document.querySelector('body');
  const paragrafo = document.createElement('p')
  paragrafo.id = 'funcionamento'
  paragrafo.innerHTML ='Clique duas vezes em um item para marcá-lo como completo'
  sel.appendChild(paragrafo)
}
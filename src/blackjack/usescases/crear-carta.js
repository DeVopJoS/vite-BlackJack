
/**
 * Crear carta en la vista.
 * @param {String} carta Elemento string valor de carta
 * @returns {HTMLImageElement} 
 */
export const crearCartaHTML = ( carta ) => {

    if(!carta) throw new Error('El elemento carta es requerido.');

    const imgCarta = document.createElement('img');
    imgCarta.src = `./assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}

/**
 * Esta función pide una carta del deck principal
 * @param {array<string>} deck 
 * @returns {string} retorna el valor de una carta Ej: A1, B1
 */
export const pedirCarta = ( deck ) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
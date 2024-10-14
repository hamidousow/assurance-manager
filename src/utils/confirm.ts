export const confirmAction = (message: string) => {
    let returnMsg: string = '';

    const isConfirmed: boolean = window.confirm(message)  
    if(isConfirmed) {
        //do something
        returnMsg = "Fermeture de l'opération."
    } else {
        //do something
        returnMsg = "Poursuite de l'opération en cours."
    }

    return { isConfirmed, returnMsg }
}
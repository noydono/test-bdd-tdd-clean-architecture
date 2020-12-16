'use strict';
// cet interface me sers de prise pour branché mes dataprovider pour ne pas dépendre d'eux mais l'inverse
// je comprend l'intêret, le pourquois mais pas le comment. 
// par exemple je peut suprimer une method de ce fichier masi mon test passera toujour et 
// si je supprime la method dans le repository le throw error renvoie rien.
// est ce que a cause du mock simule une fonction donc ne l'appel pas vraiemnt alors l'interface n'est pas réellement testé ?
module.exports = class {
    constructor() {
        
    }

    addUser() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    getUserById() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
        
    }

    getAllUser() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
}
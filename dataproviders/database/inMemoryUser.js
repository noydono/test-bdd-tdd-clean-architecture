

module.exports = class inMemoryUser {


    constructor(objData) {
        this.data = objData
    }


    add(userEntitie) {

    }

    getByFirstName(name) {
        let map = this.data.find(x => {
            if (x.firstname === name) {
                return x.firstname
            }
        });
        return map.firstname
    }

    all() {
        return this.data
    }

}; 
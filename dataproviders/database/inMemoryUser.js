const UserEntitie = require("../../core/entities/userEntitie");
module.exports = class extends inMemoryUser {


    constructor() {
        super();
        this.data = {}
    }

    addUser(userEntitie) {
        this.data = userEntitie
    }

    getUserById(id) {
        
        let user = this.data.find(userEntitie => {
            if (userEntitie.id === id) {
                return userEntitie
            }
        });
        return user.id
    }

    getAllUser() {
        return this.data
    }

}; 
 
const inMemoryUser = require('../../dataproviders/database/inMemoryUser')

module.exports = class extends inMemoryUser {
    constructor(dataTable){
        super(dataTable);
    }
}
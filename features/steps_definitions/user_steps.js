
const chai = require('chai'),
    assert = chai.assert,
    { Given, When, Then } = require('@cucumber/cucumber'),
    UserEntitie = require('../../core/entities/userEntitie'),
    UserInterface = require('../../core/port/userInterface'),
    mockUserInterface = new UserInterface()

Given('des membres existent:', (dataTable) => {
    let objData = dataTable.hashes()
    for (i = 0; i < objData.length; i++) {
        let user = new UserEntitie(objData[i].id, objData[i].firstname, objData[i].email,);
        mockUserInterface.add(user);
        assert.equal(user, mockUserInterface.all(),"user_steps given not equal")
    }
});

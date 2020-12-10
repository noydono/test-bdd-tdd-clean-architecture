const chai = require('chai'),
    assert = chai.assert,
    { Given, When, Then } = require('@cucumber/cucumber'),
    UserEntitie = require('../../core/entities/userEntitie'),
    UserInterface = require('../../core/port/userInterface')

Given('je me suis authentifié en tant que {string}', function (membre, dataTable) {
    let Data1 = dataTable.hashes(),
        mockUserInterface = new UserInterface(Data1);
           
    assert.equal(membre, mockUserInterface.getByFirstName(membre))
});


When('je tente de créé une recette avec comme contenue un {string},{string},{string},{string},{string}', function (titre_recette, type_de_plat, nombre_portion, temps_preparation, difficulte) {
    // Write code here that turns the phrase above into concrete actions
    
    return 'pending';
  });


When('si le membre le souhait je pourrai fournir un {string}, {string} , {string}, {string}', function (temps_cuisson, type_cuisson, prix, photo) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


Then('la premier partie et effective et je peut passer a la deuxieme partie', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



const UserEntitie = require('../../core/entities/userEntitie'),
    UserInterface = require('../../core/port/userInterface'),
    CreateUser = require('../../core/use_cases/CreateUser'),
    GetUser = require('../../core/use_cases/GetUser'),
    mockInterface = new UserInterface();

test('création de compte membre', async () => {

    //Given
    const persistedUser = new UserEntitie(123, 'John', 'john.doe@email.com', 'P@s$W0rD');
    mockInterface.addUser = jest.fn(() => persistedUser);
    
    // when
    const user = await CreateUser('John', 'john.doe@email.com', 'P@s$W0rD', { userRepository: mockInterface });

    // then
    expect(mockInterface.addUser).toHaveBeenCalledWith(new UserEntitie(null, 'John', 'john.doe@email.com', 'P@s$W0rD'));
    expect(user).toEqual(persistedUser);
})

test('recherche du compte membre', async () => {

    //Given
    const user = new UserEntitie(123, 'John', 'john.doe@email.com', 'P@s$W0rD');
    // je simule getUser pour qui me retourne mon user
    // mais en production mon service locator va injecter le repository  
    // suivant la db que je vais utiliser 
    mockInterface.getUserById = jest.fn((userId) => user);
    
    // when
    //je chercher l'utilisateur et j'inject ma simulation de method dans mon user pour pourvoir 
    //l'utiliser dans mon use_case
    const UserFind = await GetUser(123, { userRepository: mockInterface });

    // then
    //je verifie que ma method getUser a bien ete appeler avec une id 
    // et je verifie que le return et bon 
    expect(mockInterface.getUserById).toHaveBeenCalledWith(123);
    expect(user).toEqual(UserFind);
})

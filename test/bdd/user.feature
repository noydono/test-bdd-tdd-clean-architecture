Feature: Gestion de membre
    

    Scenario Outline: création de compte membre
        Given L'utilisateur a fourni un "<pseudo>", "<email>" et un "<password>"
        When  Le compte membre est créé
        Then  le compte et bien persisté avec les bonnes donnés
        

    Scenario Outline: interroger son compte membre
        Given le membre a déjà crée un compte
        When le membre "<id>" a demander a voir sont compte
        Then les donnés de l'utilisateur lui sont renvoyer 
        








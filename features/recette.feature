
Feature: Tout Membre - Créé une recette
  un membre veut crée une recette.

  Scenario Outline: un membre remplit la premier état de création
    Given je me suis authentifié en tant que "<firstname>"
      | id  | firstname   | email            |
      | abc | Michael     | michka@email.com |
      | def | Jean-Michel | jean@email.com   |
      | ghi | Patrick     | patpat@email.com |
    When  je tente de créé une recette avec comme contenue un "<titre_recette>","type_de_plat","nombre_portion","temps_preparation","difficulte"
    And   si le membre le souhait je pourrai fournir un "temps_cuisson", "type_cuisson" , "prix", "photo"
    Then  la premier partie et effective et je peut passer a la deuxieme partie  
      
  Examples:
      | id  | firstname   | email            |
      | abc | Michael     | michka@email.com | 
      | def | Jean-Michel | jean@email.com   | 
      | ghi | Patrick     | patpat@email.com | 







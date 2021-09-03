#language:fr
Fonctionnalité: Supprime un Hero

    Contexte:
        Etant donné que je suis sur le site
        Et je sélectionne le hero "Spider-Man"
        Et je sélectionne le hero "Wolverine"

    Scénario: Supprimer un heros
        Quand je clic supprime du hero "Spider-Man"
        Alors la carte hero "Spider-Man" n'existe pas
        Et la carte hero "Wolverine" est affiché
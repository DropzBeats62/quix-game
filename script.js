const easyQuestions = [
    // 100 questions faciles
    { question: "Quelle est la capitale de la France ?", choices: ["Berlin", "Madrid", "Paris", "Rome"], answer: 2 },
    { question: "2 + 2 = ?", choices: ["3", "4", "5", "6"], answer: 1 },
    { question: "Quel est le plus grand océan ?", choices: ["Pacifique", "Atlantique", "Indien", "Arctique"], answer: 0 },
    { question: "Quelle est la couleur du ciel ?", choices: ["Rouge", "Vert", "Bleu", "Jaune"], answer: 2 },
    { question: "Combien de continents y a-t-il ?", choices: ["4", "5", "6", "7"], answer: 3 },
    { question: "Quelle est la planète la plus proche du soleil ?", choices: ["Mars", "Vénus", "Mercure", "Jupiter"], answer: 2 },
    { question: "Qui a peint la Joconde ?", choices: ["Van Gogh", "Michel-Ange", "De Vinci", "Monet"], answer: 2 },
    { question: "Quel est le symbole chimique de l'oxygène ?", choices: ["H", "O", "C", "N"], answer: 1 },
    { question: "Combien de pattes a une araignée ?", choices: ["4", "6", "8", "10"], answer: 2 },
    { question: "Quel animal est le symbole de l'Australie ?", choices: ["Kangourou", "Koala", "Lion", "Tigre"], answer: 0 },
    { question: "Qui a écrit 'Roméo et Juliette' ?", choices: ["Molière", "Shakespeare", "Hugo", "Cervantès"], answer: 1 },
    { question: "Dans quel pays se trouve la tour Eiffel ?", choices: ["Italie", "Espagne", "France", "Allemagne"], answer: 2 },
    { question: "Quelle est la langue la plus parlée au monde ?", choices: ["Anglais", "Espagnol", "Chinois Mandarin", "Hindi"], answer: 2 },
    { question: "Combien de jours y a-t-il dans une année bissextile ?", choices: ["364", "365", "366", "367"], answer: 2 },
    { question: "Quel est l'organe qui pompe le sang ?", choices: ["Foie", "Cœur", "Poumon", "Rein"], answer: 1 },
    { question: "Qui a découvert la pénicilline ?", choices: ["Pasteur", "Curie", "Fleming", "Koch"], answer: 2 },
    { question: "Quel est le plus long fleuve du monde ?", choices: ["Nil", "Amazone", "Mississippi", "Yangtsé"], answer: 0 },
    { question: "Quel est le nom du satellite naturel de la Terre ?", choices: ["Soleil", "Lune", "Mars", "Vénus"], answer: 1 },
    { question: "Combien de joueurs y a-t-il dans une équipe de football (soccer) ?", choices: ["9", "10", "11", "12"], answer: 2 },
    { question: "Quelle est la capitale de l'Australie ?", choices: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: 2 },
    { question: "Quelle est la couleur d'une banane mûre ?", choices: ["Verte", "Rouge", "Jaune", "Bleue"], answer: 2 },
    { question: "Quel est le nom du premier jour de la semaine ?", choices: ["Dimanche", "Lundi", "Mardi", "Mercredi"], answer: 1 },
    { question: "Combien de doigts a une main humaine (normalement) ?", choices: ["4", "5", "6", "7"], answer: 1 },
    { question: "Quel est le nom du plus grand désert de sable du monde ?", choices: ["Sahara", "Gobi", "Kalahari", "Antarctique"], answer: 0 },
    { question: "Quel est le contraire de 'haut' ?", choices: ["Bas", "Gauche", "Droite", "Milieu"], answer: 0 },
    { question: "Quel est le nom du processus par lequel les plantes fabriquent leur nourriture ?", choices: ["Respiration", "Photosynthèse", "Transpiration", "Digestion"], answer: 1 },
    { question: "Quel est le nom du plus grand animal terrestre ?", choices: ["Éléphant", "Girafe", "Rhinocéros", "Hippopotame"], answer: 0 },
    { question: "Quelle est la capitale de l'Espagne ?", choices: ["Barcelone", "Madrid", "Séville", "Valence"], answer: 1 },
    { question: "Quel est le nom du principal ingrédient du pain ?", choices: ["Riz", "Farine", "Sucre", "Sel"], answer: 1 },
    { question: "Combien de côtés a un triangle ?", choices: ["2", "3", "4", "5"], answer: 1 },
    { question: "Quel est le nom du mois qui vient après juillet ?", choices: ["Juin", "Août", "Septembre", "Mai"], answer: 1 },
    { question: "Quel est le nom du fruit qui est rouge et que Blanche-Neige a mangé ?", choices: ["Pomme", "Poire", "Banane", "Orange"], answer: 0 },
    { question: "Quel est le nom de l'étoile la plus proche de la Terre ?", choices: ["Lune", "Soleil", "Mars", "Vénus"], answer: 1 },
    { question: "Combien de roues a une voiture (normalement) ?", choices: ["2", "3", "4", "5"], answer: 2 },
    { question: "Quel est le nom du liquide blanc que les vaches produisent ?", choices: ["Eau", "Lait", "Jus", "Soda"], answer: 1 },
    { question: "Quel est le nom de la saison qui vient après l'hiver ?", choices: ["Printemps", "Été", "Automne", "Hiver"], answer: 0 },
    { question: "Quel est le nom de l'objet utilisé pour écrire sur un tableau noir ?", choices: ["Stylo", "Crayon", "Craie", "Feutre"], answer: 2 },
    { question: "Quel est le nom de la partie du corps située entre le cou et le ventre ?", choices: ["Tête", "Jambe", "Bras", "Torse"], answer: 3 },
     { question: "Quelle est la forme d'une balle de tennis ?", choices: ["Carrée", "Ronde", "Triangulaire", "Rectangulaire"], answer: 1 },
    { question: "Quel est le nom du jour qui vient après vendredi ?", choices: ["Jeudi", "Samedi", "Dimanche", "Lundi"], answer: 1 },
    { question: "Quelle est la couleur de l'herbe ?", choices: ["Rouge", "Bleue", "Verte", "Jaune"], answer: 2 },
    { question: "Quel est le nom du repas du matin ?", choices: ["Déjeuner", "Dîner", "Petit déjeuner", "Souper"], answer: 2 },
    { question: "Combien d'yeux a un humain (normalement) ?", choices: ["1", "2", "3", "4"], answer: 1 },
    { question: "Quel est le nom du chapeau que l'on met sur la tête ?", choices: ["Chaussure", "Gant", "Chaussette", "Casquette"], answer: 3 },
    { question: "Quel est le nom du véhicule qui roule sur des rails ?", choices: ["Voiture", "Vélo", "Train", "Avion"], answer: 2 },
     { question: "Quel est le nom du fruit orange et rond ?", choices: ["Pomme", "Banane", "Orange", "Poire"], answer: 2 },
    { question: "Combien de lettres y a-t-il dans l'alphabet ?", choices: ["24", "25", "26", "27"], answer: 2 },
    { question: "Quel est le nom du lieu où l'on va pour voir des films ?", choices: ["Théâtre", "Cinéma", "Musée", "Stade"], answer: 1 },
    { question: "Quel est le nom du vêtement que l'on porte pour dormir ?", choices: ["Manteau", "Pyjama", "Robe", "Costume"], answer: 1 },
    { question: "Quelle est la capitale du Canada ?", choices: ["Toronto", "Montréal", "Ottawa", "Vancouver"], answer: 2 },
    { question: "Quel est le nom du personnage principal de la série de jeux vidéo 'The Legend of Zelda' ?", choices: ["Zelda", "Link", "Ganon", "Mario"], answer: 1 },
    { question: "Quel est le nom du jouet composé de plusieurs blocs de plastique colorés qui s'emboîtent ?", choices: ["LEGO", "Playmobil", "Barbie", "Puzzle"], answer: 0 },
    { question: "Quelle est la boisson chaude préparée avec des grains de café moulus ?", choices: ["Thé", "Chocolat chaud", "Café", "Tisane"], answer: 2 },
    { question: "Quel est le nom du célèbre magicien à lunettes créé par J.K. Rowling ?", choices: ["Harry Potter", "Hermione Granger", "Ron Weasley", "Drago Malefoy"], answer: 0 },
    { question: "Dans quel pays se trouve la ville de Tokyo ?", choices: ["Chine", "Corée du Sud", "Japon", "Thaïlande"], answer: 2 },
    { question: "Quel est le nom de la fête célébrée le 25 décembre ?", choices: ["Pâques", "Halloween", "Noël", "Thanksgiving"], answer: 2 },
    { question: "Quelle est la forme géométrique d'une pizza entière ?", choices: ["Carrée", "Triangulaire", "Ronde", "Rectangulaire"], answer: 2 },
    { question: "Quel est l'instrument de musique à cordes pincées ?", choices: ["Piano", "Guitare", "Trompette", "Batterie"], answer: 1 },
    { question: "Quel est l'animal domestique qui miaule ?", choices: ["Chien", "Chat", "Oiseau", "Poisson"], answer: 1 },
      { question: "Quel est le nom du grand singe qui vit dans la jungle et qui est connu pour sa force ?", choices: ["Gorille", "Chimpanzé", "Orang-outan", "Bonobo"], answer: 0 },
    { question: "Quel est le nom du petit rongeur qui est souvent utilisé comme animal de compagnie et qui court dans une roue ?", choices: ["Hamster", "Souris", "Rat", "Cochon d'Inde"], answer: 0 },
    { question: "Quel est le nom du reptile qui change de couleur pour se camoufler ?", choices: ["Caméléon", "Serpent", "Lézard", "Tortue"], answer: 0 },
    { question: "Quel est le nom de l'oiseau qui est connu pour sa capacité à imiter les sons et les paroles humaines ?", choices: ["Perroquet", "Corbeau", "Hibou", "Aigle"], answer: 0 },
    { question: "Quel est le nom du poisson orange souvent gardé dans les aquariums ?", choices: ["Poisson rouge", "Poisson-clown", "Requin", "Baleine"], answer: 0 },
    { question: "Quel est le nom de l'insecte qui produit du miel ?", choices: ["Abeille", "Fourmi", "Moustique", "Papillon"], answer: 0 },
    { question: "Quel est le nom du grand félin rayé qui vit en Asie ?", choices: ["Tigre", "Lion", "Léopard", "Panthère"], answer: 0 },
     { question: "Quel est le nom du mammifère marin qui est connu pour son intelligence et qui utilise des sons pour communiquer ?", choices: ["Dauphin", "Baleine", "Requin", "Orque"], answer: 0 },
    { question: "Quel est le nom de l'oiseau qui ne peut pas voler et qui est originaire d'Australie ?", choices: ["Émeu", "Autruche", "Kiwi", "Pingouin"], answer: 0 },
    { question: "Quel est le nom du reptile qui n'a pas de pattes ?", choices: ["Serpent", "Lézard", "Crocodile", "Tortue"], answer: 0 },
    { question: "Quel est le nom du plus grand oiseau du monde ?", choices: ["Autruche", "Aigle", "Condor", "Émeu"], answer: 0 },
    { question: "Quel est le nom de l'animal qui a une trompe ?", choices: ["Éléphant", "Rhinocéros", "Hippopotame", "Girafe"], answer: 0 },
    { question: "Quel est le nom du canard de dessin animé qui porte un chapeau de marin ?", choices: ["Donald Duck", "Daffy Duck", "Bugs Bunny", "Mickey Mouse"], answer: 0 },
    { question: "Quel est le nom de la princesse Disney qui a perdu une chaussure de verre ?", choices: ["Cendrillon", "Blanche-Neige", "Belle", "Aurore"], answer: 0 },
    { question: "Quel est le nom du célèbre plombier italien dans les jeux vidéo ?", choices: ["Mario", "Luigi", "Sonic", "Link"], answer: 0 },
    { question: "Quel est le nom de l'ours jaune qui adore le miel dans les dessins animés ?", choices: ["Winnie l'ourson", "Paddington", "Baloo", "Yogi Bear"], answer: 0 },
     { question: "Qui est le meilleur ami de Mickey Mouse ?", choices: ["Donald Duck", "Goofy", "Pluto", "Dingo"], answer: 1 },
    { question: "Quel est le nom du lionceau dans 'Le Roi Lion' ?", choices: ["Simba", "Mufasa", "Scar", "Nala"], answer: 0 },
    { question: "Quel est le nom du chien dans 'La Belle et le Clochard' ?", choices: ["Clochard", "Lady", "Jock", "César"], answer: 0 },
    { question: "Quel est le nom du petit poisson clown dans 'Le Monde de Nemo' ?", choices: ["Nemo", "Marin", "Dory", "Corail"], answer: 0 },
    { question: "Quelle est la couleur du personnage principal de 'Bob l'éponge' ?", choices: ["Jaune", "Rouge", "Bleu", "Vert"], answer: 0 },
    { question: "Quel est le nom du renne au nez rouge dans les contes de Noël ?", choices: ["Rudolph", "Comète", "Tonnerre", "Éclair"], answer: 0 },
    { question: "Quel est le nom de la souris qui est la compagne de Mickey Mouse ?", choices: ["Minnie Mouse", "Daisy Duck", "Clarabelle Cow", "Donald Duck"], answer: 0 },
    { question: "Quel est le nom du capitaine pirate dans 'Peter Pan' ?", choices: ["Capitaine Crochet", "Barbe Noire", "Jack Sparrow", "Long John Silver"], answer: 0 },
    { question: "Quel est le nom du gentil monstre bleu dans 'Monstres et Cie' ?", choices: ["Sully", "Mike", "Bob", "Léon"], answer: 0 },
    { question: "Quel est le nom de la fée dans 'Peter Pan' ?", choices: ["Clochette", "Rosetta", "Iridessa", "Noa"], answer: 0 },
    { question: "Dans quel film d'animation trouve-t-on un rat qui cuisine ?", choices: ["Ratatouille", "Le Monde de Nemo", "Madagascar", "Shrek"], answer: 0 },
    { question: "Qui est le créateur de Mickey Mouse ?", choices: ["Walt Disney", "Steven Spielberg", "George Lucas", "Tim Burton"], answer: 0 },
    { question: "Quel est le nom du jouet cowboy dans 'Toy Story' ?", choices: ["Woody", "Buzz", "Rex", "Jessie"], answer: 0 },
    { question: "Quel est le nom du bonhomme de neige dans 'La Reine des Neiges' ?", choices: ["Olaf", "Kristoff", "Hans", "Sven"], answer: 0 },
    { question: "Quel super-héros est connu comme l'homme-araignée ?", choices: ["Spider-Man", "Batman", "Superman", "Iron Man"], answer: 0 },
    { question: "Quelle est la couleur de l'incroyable Hulk ?", choices: ["Vert", "Rouge", "Bleu", "Jaune"], answer: 0 },
    { question: "Quel super-héros utilise un marteau enchanté ?", choices: ["Thor", "Captain America", "Iron Man", "Black Panther"], answer: 0 },
    { question: "Qui est le principal ennemi de Batman ?", choices: ["Le Joker", "Le Pingouin", "Double-Face", "L'Épouvantail"], answer: 0 },
     { question: "Quel super-héros est un maître des arts martiaux et vit à K'un-Lun ?", choices: ["Iron Fist", "Daredevil", "Shang-Chi", "Black Panther"], answer: 0 },
    { question: "Quelle super-héroïne est connue pour son lasso magique ?", choices: ["Wonder Woman", "Black Widow", "Supergirl", "Captain Marvel"], answer: 0 },
    { question: "Quel est le vrai nom de Superman ?", choices: ["Clark Kent", "Bruce Wayne", "Peter Parker", "Tony Stark"], answer: 0 },
    { question: "De quelle planète vient Superman ?", choices: ["Krypton", "Mars", "Terre", "Asgard"], answer: 0 },
    { question: "Quel métal fictif est utilisé pour fabriquer le bouclier de Captain America ?", choices: ["Vibranium", "Adamantium", "Carbonadium", "Uru"], answer: 0 },
    { question: "Qui est le frère adoptif de Thor ?", choices: ["Loki", "Odin", "Heimdall", "Balder"], answer: 0 },
    { question: "Quel super-héros est aveugle et possède des sens hyper-développés ?", choices: ["Daredevil", "Cyclope", "Professeur X", "Hawkeye"], answer: 0 },
    { question: "Quelle est la ville fictive protégée par Batman ?", choices: ["Gotham City", "Metropolis", "Central City", "Star City"], answer: 0 },

];

const mediumQuestions = [
    // 100 questions moyennes
    { question: "Qui a formulé la théorie de la relativité ?", choices: ["Newton", "Einstein", "Galilée", "Tesla"], answer: 1 },
    { question: "Quel est le plus haut sommet du monde ?", choices: ["K2", "Kangchenjunga", "Everest", "Lhotse"], answer: 2 },
    { question: "Qui a écrit 'Les Misérables' ?", choices: ["Zola", "Balzac", "Hugo", "Flaubert"], answer: 2 },
    { question: "Quel est l'élément le plus abondant dans l'univers ?", choices: ["Oxygène", "Hydrogène", "Fer", "Carbone"], answer: 1 },
    { question: "Quel est le nom du détroit séparant la Russie et l'Alaska ?", choices: ["Détroit de Magellan", "Détroit de Béring", "Détroit de Gibraltar", "Détroit de Malacca"], answer: 1 },
    { question: "Qui a inventé l'ampoule électrique ?", choices: ["Thomas Edison", "Nikola Tesla", "Benjamin Franklin", "Alexander Graham Bell"], answer: 0 },
    { question: "Quel est le plus grand désert chaud du monde ?", choices: ["Sahara", "Gobi", "Kalahari", "Arctique"], answer: 0 },
    { question: "Quelle est la capitale de l'Afrique du Sud ?", choices: ["Johannesburg", "Le Cap", "Pretoria", "Durban"], answer: 2 },
    { question: "Quel est le nom du premier homme à avoir marché sur la Lune ?", choices: ["Neil Armstrong", "Buzz Aldrin", "Youri Gagarine", "Alan Shepard"], answer: 0 },
    { question: "Dans quel pays se trouve le Machu Picchu ?", choices: ["Pérou", "Bolivie", "Chili", "Équateur"], answer: 0 },
    { question: "Quelle est la plus grande île du monde ?", choices: ["Groenland", "Australie", "Bornéo", "Madagascar"], answer: 0 },
    { question: "Qui a composé les Quatre Saisons ?", choices: ["Mozart", "Bach", "Vivaldi", "Beethoven"], answer: 2 },
    { question: "Quel est le nom du processus de transformation d'une chenille en papillon ?", choices: ["Photosynthèse", "Métamorphose", "Mitose", "Osmose"], answer: 1 },
    { question: "Quel est le nom du plus grand récif corallien du monde ?", choices: ["Grande Barrière de Corail", "Récif de la mer Rouge", "Récif d'Andros", "Récif de Nouvelle-Calédonie"], answer: 0 },
    { question: "Quel est le nom du traité qui a mis fin à la Première Guerre mondiale ?", choices: ["Traité de Versailles", "Traité de Trianon", "Traité de Sèvres", "Traité de Saint-Germain-en-Laye"], answer: 0 },
    { question: "Quelle est la monnaie officielle du Japon ?", choices: ["Yuan", "Won", "Yen", "Dollar"], answer: 2 },
    { question: "Qui a écrit 'Le Petit Prince' ?", choices: ["Victor Hugo", "Antoine de Saint-Exupéry", "Albert Camus", "Marcel Proust"], answer: 1 },
    { question: "Dans quel pays se trouve la ville de Marrakech ?", choices: ["Algérie", "Tunisie", "Maroc", "Égypte"], answer: 2 },
    { question: "Quel est le nom du dieu grec de la mer ?", choices: ["Zeus", "Hadès", "Poséidon", "Arès"], answer: 2 },
    { question: "Qui a peint 'La Nuit étoilée' ?", choices: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"], answer: 1 },
    { question: "Quel est le nom de la plus ancienne université du monde ?", choices: ["Université de Bologne", "Université d'Oxford", "Université de Paris", "Université de Cambridge"], answer: 0 },
    { question: "Qui a écrit 'Orgueil et Préjugés' ?", choices: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Virginia Woolf"], answer: 0 },
    { question: "Quel est le nom du plus grand volcan d'Europe ?", choices: ["Etna", "Vésuve", "Stromboli", "Hekla"], answer: 0 },
    { question: "Dans quel pays se trouve la ville de Petra ?", choices: ["Jordanie", "Égypte", "Syrie", "Israël"], answer: 0 },
    { question: "Qui a inventé le téléphone ?", choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"], answer: 0 },
    { question: "Quel est le nom de la première femme à avoir volé en solo à travers l'océan Atlantique ?", choices: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Ruth Elder"], answer: 0 },
    { question: "Quel est le nom du célèbre détective de fiction créé par Arthur Conan Doyle ?", choices: ["Sherlock Holmes", "Hercule Poirot", "Miss Marple", "Philip Marlowe"], answer: 0 },
    { question: "Quelle est la capitale de l'Argentine ?", choices: ["Buenos Aires", "Santiago", "Lima", "Montevideo"], answer: 0 },
{ question: "Qui a réalisé le film 'Pulp Fiction' ?", choices: ["Quentin Tarantino", "Martin Scorsese", "Steven Spielberg", "Christopher Nolan"], answer: 0 },
{ question: "Quel est le nom du compositeur de la musique du film 'Le Parrain' ?", choices: ["Nino Rota", "Ennio Morricone", "John Williams", "Hans Zimmer"], answer: 0 },
{ question: "Quel est le nom de l'océan qui se trouve à l'est de l'Afrique ?", choices: ["Océan Atlantique", "Océan Indien", "Océan Pacifique", "Océan Arctique"], answer: 1 },
{ question: "Quel est le nom du célèbre tableau de Léonard de Vinci représentant une femme souriante ?", choices: ["La Joconde", "La Dame à l'hermine", "La Belle Ferronnière", "La Vierge aux rochers"], answer: 0 },
{ question: "Dans quel pays se trouve la Grande Barrière de corail ?", choices: ["Australie", "Indonésie", "Philippines", "Maldives"], answer: 0 },
{ question: "Quel est le nom du célèbre physicien qui a développé la théorie de la relativité restreinte ?", choices: ["Albert Einstein", "Isaac Newton", "Galilée", "Niels Bohr"], answer: 0 },
{ question: "Qui a écrit le roman '1984' ?", choices: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Philip K. Dick"], answer: 0 },
{ question: "Quel est le nom de la mer qui borde la côte est de l'Italie ?", choices: ["Mer Adriatique", "Mer Tyrrhénienne", "Mer Ionienne", "Mer Méditerranée"], answer: 0 },
{ question: "Quel est le nom du célèbre peintre néerlandais connu pour ses autoportraits ?", choices: ["Rembrandt", "Vermeer", "Van Gogh", "Rubens"], answer: 0 },
{ question: "Quel est le nom de la plus grande pyramide d'Égypte ?", choices: ["Pyramide de Khéops", "Pyramide de Khéphren", "Pyramide de Mykérinos", "Pyramide de Djéser"], answer: 0 },
{ question: "Quel est le nom du célèbre sculpteur italien de la Renaissance, auteur de la statue de David ?", choices: ["Michel-Ange", "Donatello", "Léonard de Vinci", "Raphaël"], answer: 0 },
{ question: "Qui a écrit la pièce de théâtre 'Hamlet' ?", choices: ["William Shakespeare", "Molière", "Sophocle", "Anton Tchekhov"], answer: 0 },
    { question: "Quel est le nom du chimiste qui a formulé les lois des gaz parfaits ?", choices: ["Robert Boyle", "Antoine Lavoisier", "John Dalton", "Amedeo Avogadro"], answer: 0 },
    { question: "Qui a découvert la loi de la gravitation universelle ?", choices: ["Isaac Newton", "Albert Einstein", "Galilée", "Johannes Kepler"], answer: 0 },
    { question: "Quel est l'élément chimique le plus léger ?", choices: ["Hydrogène", "Hélium", "Lithium", "Béryllium"], answer: 0 },
    { question: "Quel est l'organe responsable de la production de l'insuline ?", choices: ["Pancréas", "Foie", "Rein", "Rate"], answer: 0 },
    { question: "Qui est l'auteur de 'L'Iliade' et 'L'Odyssée' ?", choices: ["Homère", "Virgile", "Sophocle", "Eschyle"], answer: 0 },
    { question: "Quel est le nom du processus par lequel les plantes vertes convertissent la lumière en énergie chimique ?", choices: ["Photosynthèse", "Respiration", "Transpiration", "Fermentation"], answer: 0 },
    { question: "Quelle est la formule chimique de l'eau ?", choices: ["H2O", "CO2", "NaCl", "O2"], answer: 0 },
    { question: "Quel est le nom de la couche externe de la Terre ?", choices: ["Croûte terrestre", "Manteau", "Noyau externe", "Noyau interne"], answer: 0 },
    { question: "Quel est le nom du plus grand satellite naturel de Saturne ?", choices: ["Titan", "Encelade", "Rhéa", "Mimas"], answer: 0 },
    { question: "Qui a peint 'Les Tournesols' ?", choices: ["Vincent van Gogh", "Claude Monet", "Pablo Picasso", "Edgar Degas"], answer: 0 },
    { question: "Quel est le nom du célèbre architecte catalan connu pour la Sagrada Família ?", choices: ["Antoni Gaudí", "Le Corbusier", "Frank Lloyd Wright", "Ludwig Mies van der Rohe"], answer: 0 },
    { question: "Quel est le nom du plus long fleuve d'Afrique ?", choices: ["Nil", "Congo", "Niger", "Zambèze"], answer: 0 },
     { question: "Qui a écrit 'Don Quichotte' ?", choices: ["Miguel de Cervantes", "Gabriel García Márquez", "Jorge Luis Borges", "Pablo Neruda"], answer: 0 },
    { question: "Quel est le nom de la capitale de la Grèce ?", choices: ["Athènes", "Rome", "Istanbul", "Le Caire"], answer: 0 },
    { question: "Quel est le nom du célèbre empereur romain qui a légalisé le christianisme ?", choices: ["Constantin Ier", "Néron", "Auguste", "Trajan"], answer: 0 },
    { question: "Qui a composé la 'Neuvième Symphonie' ?", choices: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Franz Schubert"], answer: 0 },
    { question: "Quelle est la distance approximative entre la Terre et la Lune ?", choices: ["384 400 km", "149 600 000 km", "1 000 000 km", "500 000 km"], answer: 0 },
    { question: "Quel est le nom du scientifique qui a développé la théorie de l'évolution par la sélection naturelle ?", choices: ["Charles Darwin", "Gregor Mendel", "Alfred Russel Wallace", "Jean-Baptiste Lamarck"], answer: 0 },
    { question: "Quel est le nom de la galaxie qui contient notre système solaire ?", choices: ["Voie lactée", "Andromède", "Galaxie du Triangle", "Grand Nuage de Magellan"], answer: 0 },
    { question: "Quel est l'élément chimique principal composant l'air que nous respirons ?", choices: ["Azote", "Oxygène", "Dioxyde de carbone", "Argon"], answer: 0 },
    { question: "Qui a peint le plafond de la chapelle Sixtine ?", choices: ["Michel-Ange", "Léonard de Vinci", "Raphaël", "Donatello"], answer: 0 },
    { question: "Quelle est la capitale de l'Australie ?", choices: ["Canberra", "Sydney", "Melbourne", "Perth"], answer: 0 },
    { question: "Quel est le nom de la plus haute montagne d'Afrique ?", choices: ["Kilimandjaro", "Mont Kenya", "Mont Stanley", "Mont Meru"], answer: 0 },
      { question: "Quel est le nom du détroit qui sépare l'Europe de l'Afrique ?", choices: ["Détroit de Gibraltar", "Détroit de Béring", "Détroit de Magellan", "Canal de Suez"], answer: 0 },
    { question: "Qui a écrit 'Le Seigneur des Anneaux' ?", choices: ["J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin", "Ursula K. Le Guin"], answer: 0 },
    { question: "Quelle est la capitale de la Russie ?", choices: ["Moscou", "Saint-Pétersbourg", "Kiev", "Varsovie"], answer: 0 },
    { question: "Quel est le nom du célèbre explorateur qui a découvert l'Amérique ?", choices: ["Christophe Colomb", "Vasco de Gama", "Fernand de Magellan", "Marco Polo"], answer: 0 },
        { question: "Qui a peint 'Guernica' ?", choices: ["Pablo Picasso", "Salvador Dalí", "Joan Miró", "Diego Rivera"], answer: 0 },
    { question: "Quelle est la capitale de l'Inde ?", choices: ["New Delhi", "Mumbai", "Kolkata", "Chennai"], answer: 0 },
    { question: "Quel est le nom du plus grand désert de sel du monde ?", choices: ["Salar d'Uyuni", "Désert d'Atacama", "Grand Lac Salé", "Namib"], answer: 0 },
    { question: "Qui a écrit 'Roméo et Juliette' ?", choices: ["William Shakespeare", "Molière", "Victor Hugo", "Fiodor Dostoïevski"], answer: 0 },
    { question: "Quel est le nom du plus grand lac d'Afrique ?", choices: ["Lac Victoria", "Lac Tanganyika", "Lac Malawi", "Lac Turkana"], answer: 0 },
    { question: "Qui a découvert la pénicilline ?", choices: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Robert Koch"], answer: 0 },
    { question: "Quelle est la capitale du Brésil ?", choices: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"], answer: 0 },
    { question: "Quel est le nom de la célèbre horloge de Londres ?", choices: ["Big Ben", "Tower Bridge", "Buckingham Palace", "Westminster Abbey"], answer: 0 },
    { question: "Qui a écrit 'Les Hauts de Hurlevent' ?", choices: ["Emily Brontë", "Charlotte Brontë", "Jane Austen", "Anne Brontë"], answer: 0 },
    { question: "Quel est le nom de la plus grande forêt tropicale du monde ?", choices: ["Forêt amazonienne", "Forêt du Congo", "Forêt de Bornéo", "Forêt de Nouvelle-Guinée"], answer: 0 },
    { question: "Qui a peint 'La Jeune Fille à la perle' ?", choices: ["Johannes Vermeer", "Rembrandt", "Vincent van Gogh", "Jan Steen"], answer: 0 },
     { question: "Quel est le nom du plus grand canyon du monde ?", choices: ["Grand Canyon", "Canyon de Colca", "Fish River Canyon", "Yarlung Tsangpo Grand Canyon"], answer: 0 },
    { question: "Qui a écrit 'Le Vieil Homme et la Mer' ?", choices: ["Ernest Hemingway", "F. Scott Fitzgerald", "William Faulkner", "John Steinbeck"], answer: 0 },
    { question: "Quelle est la capitale de l'Égypte ?", choices: ["Le Caire", "Alexandrie", "Louxor", "Gizeh"], answer: 0 },
     { question: "Quel est le nom du plus haut bâtiment du monde (en 2023) ?", choices: ["Burj Khalifa", "Shanghai Tower", "Abraj Al-Bait Clock Tower", "Ping An Finance Centre"], answer: 0 },
    { question: "Qui a composé 'Le Lac des cygnes' ?", choices: ["Piotr Ilitch Tchaïkovski", "Igor Stravinsky", "Sergueï Rachmaninov", "Modeste Moussorgski"], answer: 0 },
    { question: "Quelle est la capitale du Japon ?", choices: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"], answer: 0 },
    { question: "Qui a écrit 'Le Nom de la rose' ?", choices: ["Umberto Eco", "Italo Calvino", "Alberto Moravia", "Dino Buzzati"], answer: 0 },
    { question: "Quel est l'organe qui produit la bile ?", choices: ["Foie", "Pancréas", "Rate", "Estomac"], answer: 0},
    { question: "Quel est le nom de la plus grande chaîne de montagnes d'Europe ?", choices: ["Alpes", "Pyrénées", "Carpates", "Oural"], answer: 0 },
    { question: "Qui a écrit 'Crime et Châtiment' ?", choices: ["Fiodor Dostoïevski", "Léon Tolstoï", "Anton Tchekhov", "Alexandre Pouchkine"], answer: 0},
    { question: "Quelle est la capitale de la Chine ?", choices: ["Pékin", "Shanghai", "Hong Kong", "Canton"], answer: 0 },
     { question: "Quel est le nom de l'inventeur de la dynamite ?", choices: ["Alfred Nobel", "Thomas Edison", "Nikola Tesla", "Alexander Graham Bell"], answer: 0 },
    { question: "Quelle est l'abréviation pour désigner l'acide désoxyribonucléique ?", choices: ["ADN", "ARN", "ATP", "PVC"], answer: 0 },
{ question: "Quel groupe a chanté 'Bohemian Rhapsody'?", choices: ["Queen", "The Beatles", "Led Zeppelin", "The Rolling Stones"], answer: 0 },
{ question: "Qui a composé la musique du film 'Titanic' ?", choices: ["James Horner", "Hans Zimmer", "John Williams", "Ennio Morricone"], answer: 0 },
{ question: "Qui a chanté 'Imagine' ?", choices: ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"], answer: 0},
{ question: "Quel groupe de rock a sorti l'album 'The Dark Side of the Moon' ?", choices: ["Pink Floyd", "The Who", "Genesis", "Yes"], answer: 0 },
{ question: "Quel est le titre de l'album le plus vendu de Michael Jackson ?", choices: ["Thriller", "Bad", "Off the Wall", "Dangerous"], answer: 0 },
    {question: "Qui est le réalisateur de la trilogie du 'Seigneur des Anneaux' ?", choices: ["Peter Jackson", "Steven Spielberg", "George Lucas", "Christopher Nolan"], answer: 0},
{ question: "Quel acteur a incarné James Bond dans 'Casino Royale' (2006) ?", choices: ["Daniel Craig", "Pierce Brosnan", "Sean Connery", "Roger Moore"], answer: 0 },
{ question: "Qui a réalisé le film 'Inception' ?", choices: ["Christopher Nolan", "Quentin Tarantino", "David Fincher", "Martin Scorsese"], answer: 0 },
{ question: "Dans quel film trouve-t-on le personnage de Hannibal Lecter ?", choices: ["Le Silence des agneaux", "Seven", "Fight Club", "Usual Suspects"], answer: 0 },
{ question: "Qui a composé la musique de la saga 'Star Wars' ?", choices: ["John Williams", "Hans Zimmer", "Howard Shore", "Danny Elfman"], answer: 0 },

];

const hardQuestions = [
    // 100 questions difficiles
   { question: "Quel est le nom du paradoxe concernant le voyage dans le temps où l'on retourne dans le passé pour tuer son propre grand-père ?", choices: ["Paradoxe de l'écrivain", "Paradoxe du grand-père", "Paradoxe de Fermi", "Paradoxe de l'observateur"], answer: 1 },
    { question: "Quel est le nom du théorème qui stipule que dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés ?", choices: ["Théorème de Thalès", "Théorème de Pythagore", "Théorème de Fermat", "Théorème de Gödel"], answer: 1 },
    { question: "Quelle est la principale composante de l'atmosphère de Vénus ?", choices: ["Dioxyde de carbone", "Azote", "Oxygène", "Méthane"], answer: 0 },
    { question: "Qui a découvert la structure en double hélice de l'ADN ?", choices: ["Watson et Crick", "Mendel", "Darwin", "Pasteur"], answer: 0 },
    { question: "Quel est le nom du phénomène où la lumière se courbe en passant près d'un objet massif ?", choices: ["Effet Doppler", "Réfraction", "Diffraction", "Lentille gravitationnelle"], answer: 3 },
    { question: "Qui a écrit 'Cent ans de solitude' ?", choices: ["Jorge Luis Borges", "Gabriel García Márquez", "Mario Vargas Llosa", "Julio Cortázar"], answer: 1 },
    { question: "Quel est le nom de la particule élémentaire porteuse de la force électromagnétique ?", choices: ["Neutrino", "Photon", "Gluon", "Boson de Higgs"], answer: 1 },
    { question: "Dans quel pays se trouve le site archéologique de Pétra ?", choices: ["Jordanie", "Syrie", "Liban", "Israël"], answer: 0 },
    { question: "Quel est le nom du processus de division cellulaire qui produit des gamètes (cellules sexuelles) ?", choices: ["Mitose", "Méiose", "Fission binaire", "Bourgeonnement"], answer: 1 },
    { question: "Qui a développé la première classification périodique des éléments ?", choices: ["Lavoisier", "Mendeleïev", "Dalton", "Bohr"], answer: 1 },
    { question: "Quel est le nom de la théorie qui décrit l'évolution de l'univers à partir d'un état extrêmement chaud et dense ?", choices: ["Théorie des cordes", "Théorie du Big Bang", "Théorie de l'état stationnaire", "Théorie de l'inflation cosmique"], answer: 1 },
    { question: "Quelle est la capitale de la Mongolie ?", choices: ["Oulan-Bator", "Astana", "Bichkek", "Tachkent"], answer: 0 },
    { question: "Quel est le nom du premier satellite artificiel lancé dans l'espace ?", choices: ["Explorer 1", "Spoutnik 1", "Vanguard 1", "Telstar 1"], answer: 1 },
    { question: "Qui a écrit 'L'Odyssée' ?", choices: ["Homère", "Virgile", "Sophocle", "Euripide"], answer: 0 },
    { question: "Quel est le nom du plus grand lac d'eau douce du monde en volume ?", choices: ["Lac Supérieur", "Lac Victoria", "Lac Baïkal", "Lac Michigan-Huron"], answer: 2 },
    { question: "Dans quelle ville se trouve le siège des Nations Unies ?", choices: ["Genève", "New York", "Vienne", "Bruxelles"], answer: 1 },
    { question: "Quel est le nom du physicien qui a formulé les lois du mouvement et de la gravitation universelle ?", choices: ["Galilée", "Newton", "Kepler", "Copernic"], answer: 1 },
    { question: "Quel est le nom de la plus grande structure artificielle construite par l'homme ?", choices: ["Grande Muraille de Chine", "Barrage des Trois-Gorges", "Station spatiale internationale", "Canal de Panama"], answer: 0 },
    { question: "Qui a écrit 'Crime et Châtiment' ?", choices: ["Léon Tolstoï", "Fiodor Dostoïevski", "Anton Tchekhov", "Alexandre Pouchkine"], answer: 1 },
    { question: "Quel est le nom du scientifique qui a proposé le modèle héliocentrique du système solaire ?", choices: ["Ptolémée", "Copernic", "Aristote", "Brahe"], answer: 1 },
    { question: "Quel est le nom du théorème qui énonce que tout nombre entier supérieur à 1 peut être écrit de manière unique comme un produit de nombres premiers ?", choices: ["Théorème fondamental de l'arithmétique", "Théorème de Fermat-Wiles", "Théorème de Pythagore", "Théorème de Gödel"], answer: 0 },
    { question: "Quelle est la constante de Planck, un concept fondamental de la mécanique quantique ?", choices: ["6.626 x 10^-34 J.s", "9.81 m/s²", "3.00 x 10^8 m/s", "1.602 x 10^-19 C"], answer: 0 },
{ question: "Quel est le nom du paradoxe en mécanique quantique qui illustre la superposition des états ?", choices: ["Chat de Schrödinger", "Paradoxe EPR", "Paradoxe de Zénon", "Paradoxe de l'information"], answer: 0 },
{ question: "Qui a formulé le principe d'incertitude en mécanique quantique ?", choices: ["Werner Heisenberg", "Niels Bohr", "Erwin Schrödinger", "Max Planck"], answer: 0 },
{ question: "Quel est le nom du processus par lequel une étoile massive s'effondre sur elle-même pour former un trou noir ?", choices: ["Supernova", "Nova", "Naine blanche", "Géante rouge"], answer: 0 },
{ question: "Quelle est la plus petite unité de la matière qui conserve les propriétés chimiques d'un élément ?", choices: ["Atome", "Molécule", "Électron", "Proton"], answer: 0 },
{ question: "Quel est le nom de la branche de la physique qui étudie les propriétés et le comportement de la lumière ?", choices: ["Optique", "Thermodynamique", "Mécanique quantique", "Électromagnétisme"], answer: 0 },
    { question: "Quel est le nom de la particule subatomique qui a une charge électrique négative ?", choices: ["Électron", "Proton", "Neutron", "Photon"], answer: 0 },
{ question: "Quelle est la loi de la thermodynamique qui stipule que l'entropie d'un système isolé tend à augmenter ?", choices: ["Deuxième loi de la thermodynamique", "Première loi de la thermodynamique", "Troisième loi de la thermodynamique", "Loi zéro de la thermodynamique"], answer: 0 },
{ question: "Quel est le nom du processus par lequel un noyau atomique lourd se divise en deux noyaux plus légers ?", choices: ["Fission nucléaire", "Fusion nucléaire", "Désintégration alpha", "Désintégration bêta"], answer: 0 },
{ question: "Quelle est la vitesse de la lumière dans le vide (en mètres par seconde) ?", choices: ["299 792 458 m/s", "300 000 000 m/s", "343 m/s", "1 080 000 000 m/s"], answer: 0},
    { question: "Quel est le nom du mathématicien grec qui a travaillé sur la géométrie et a écrit 'Les Éléments' ?", choices: ["Euclide", "Pythagore", "Thalès", "Archimède"], answer: 0 },
{ question: "Qui a écrit 'Critique de la raison pure' ?", choices: ["Emmanuel Kant", "Friedrich Nietzsche", "Georg Wilhelm Friedrich Hegel", "Arthur Schopenhauer"], answer: 0 },
{ question: "Quel est le nom de la philosophie qui met l'accent sur l'existence individuelle, la liberté et le choix ?", choices: ["Existentialisme", "Stoïcisme", "Rationalisme", "Empirisme"], answer: 0 },
{ question: "Quel philosophe est associé à la phrase 'Je pense, donc je suis' ?", choices: ["René Descartes", "Socrate", "Platon", "Aristote"], answer: 0 },
{ question: "Quel est le nom de la théorie économique qui prône la non-intervention de l'État dans l'économie ?", choices: ["Libéralisme économique", "Keynésianisme", "Marxisme", "Socialisme"], answer: 0 },
{ question: "Qui a écrit 'Le Capital' ?", choices: ["Karl Marx", "Adam Smith", "John Maynard Keynes", "David Ricardo"], answer: 0 },
{ question: "Quel est le nom de la branche de la linguistique qui étudie le sens des mots et des phrases ?", choices: ["Sémantique", "Syntaxe", "Phonologie", "Morphologie"], answer: 0 },
{ question: "Quel est le nom du psychologue qui a développé la théorie de la psychanalyse ?", choices: ["Sigmund Freud", "Carl Jung", "Ivan Pavlov", "B.F. Skinner"], answer: 0 },
    { question: "Quel est le nom du concept en psychologie qui décrit la tendance à attribuer ses propres traits de personnalité indésirables à d'autres personnes ?", choices: ["Projection", "Déni", "Répression", "Sublimation"], answer: 0 },
{ question: "Quelle est la capitale de l'Australie ?", choices: ["Canberra", "Sydney", "Melbourne", "Perth"], answer: 0 },
{ question: "Quel est le nom de la plus haute montagne d'Afrique ?", choices: ["Kilimandjaro", "Mont Kenya", "Mont Stanley", "Mont Meru"], answer: 0 },
{ question: "Qui a écrit 'Guerre et Paix' ?", choices: ["Léon Tolstoï", "Fiodor Dostoïevski", "Anton Tchekhov", "Alexandre Pouchkine"], answer: 0 },
{ question: "Quel est le nom du plus long fleuve d'Asie ?", choices: ["Yangtsé", "Gange", "Mékong", "Ienisseï"], answer: 0 },
{ question: "Qui a composé la 'Symphonie du Nouveau Monde' ?", choices: ["Antonín Dvořák", "Ludwig van Beethoven", "Johannes Brahms", "Gustav Mahler"], answer: 0 },
    { question: "Quelle est la capitale de la Corée du Sud ?", choices: ["Séoul", "Pusan", "Incheon", "Daegu"], answer: 0 },
{ question: "Quel est le nom du plus grand lac salé du monde ?", choices: ["Mer Caspienne", "Grand Lac Salé", "Lac d'Aral", "Lac Balkhach"], answer: 0 },
{ question: "Qui a écrit 'Hamlet' ?", choices: ["William Shakespeare", "Molière", "Sophocle", "Anton Tchekhov"], answer: 0 },
{ question: "Quelle est la capitale de l'Indonésie ?", choices: ["Jakarta", "Surabaya", "Bandung", "Medan"], answer: 0 },
    { question: "Qui a été le premier président des États-Unis ?", choices: ["George Washington", "Thomas Jefferson", "John Adams", "Abraham Lincoln"], answer: 0 },
    { question: "Quelle est la date de la Révolution française ?", choices: ["1789", "1776", "1812", "1848"], answer: 0 },
    { question: "Qui a dirigé l'Union soviétique pendant la Seconde Guerre mondiale ?", choices: ["Joseph Staline", "Lénine", "Trotsky", "Khrouchtchev"], answer: 0 },
    { question: "Quel est le nom de la première bombe atomique utilisée en temps de guerre ?", choices: ["Little Boy", "Fat Man", "Trinity", "Ivy Mike"], answer: 0 },
    { question: "Qui a été le premier empereur romain ?", choices: ["Auguste", "Jules César", "Néron", "Caligula"], answer: 0 },
    { question: "Quelle est la date de la chute de l'Empire romain d'Occident ?", choices: ["476", "395", "410", "480"], answer: 0 },
    { question: "Qui a dirigé la Révolution cubaine ?", choices: ["Fidel Castro", "Che Guevara", "Raúl Castro", "Camilo Cienfuegos"], answer: 0 },
{ question: "Quel événement a déclenché la Première Guerre mondiale ?", choices: ["Assassinat de l'archiduc François-Ferdinand", "Invasion de la Pologne", "Naufrage du Lusitania", "Attaque de Pearl Harbor"], answer: 0 },
{ question: "Qui était le président des États-Unis pendant la guerre de Sécession ?", choices: ["Abraham Lincoln", "Andrew Johnson", "Ulysses S. Grant", "James Buchanan"], answer: 0 },
{ question: "Quel est le nom du traité qui a mis fin à la guerre de Trente Ans ?", choices: ["Traités de Westphalie", "Traité de Versailles", "Traité de Trianon", "Traité de Sèvres"], answer: 0 },
{ question: "Quelle est la date de la prise de la Bastille ?", choices: ["14 juillet 1789", "4 juillet 1776", "11 novembre 1918", "1er mai 1789"], answer: 0 },
{ question: "Qui a été le premier président de la République française ?", choices: ["Louis-Napoléon Bonaparte", "Adolphe Thiers", "Raymond Poincaré", "Charles de Gaulle"], answer: 0 },
 { question: "Quelle civilisation ancienne a construit les pyramides de Gizeh ?", choices: ["Égyptiens", "Mayas", "Incas", "Aztèques"], answer: 0 },
{ question: "Quel est le nom de l'ancienne cité grecque célèbre pour son oracle ?", choices: ["Delphes", "Athènes", "Sparte", "Thèbes"], answer: 0 },
    { question: "Quel empire a été dirigé par Gengis Khan ?", choices: ["Empire mongol", "Empire ottoman", "Empire romain", "Empire perse"], answer: 0 },
{ question: "Quel est le nom de la bataille décisive qui a mis fin aux guerres napoléoniennes ?", choices: ["Bataille de Waterloo", "Bataille d'Austerlitz", "Bataille de Leipzig", "Bataille de Trafalgar"], answer: 0 },
{ question: "Qui était le pharaon égyptien connu pour son tombeau richement préservé ?", choices: ["Toutânkhamon", "Ramsès II", "Khéops", "Akhénaton"], answer: 0 },
{ question: "Quel est le nom de la guerre qui a opposé les colonies américaines à la Grande-Bretagne ?", choices: ["Guerre d'Indépendance américaine", "Guerre de Sécession", "Guerre de 1812", "Guerre franco-indienne"], answer: 0 },
{ question: "Quelle dynastie chinoise a construit la Grande Muraille ?", choices: ["Ming", "Qing", "Han", "Tang"], answer: 0 },
{ question: "Quel est le nom du célèbre discours d'Abraham Lincoln prononcé pendant la guerre de Sécession ?", choices: ["Discours de Gettysburg", "Proclamation d'émancipation", "Second discours inaugural", "Discours sur l'état de l'Union"], answer: 0 },
 { question: "Qui a dirigé l'Afrique du Sud pendant la fin de l'apartheid ?", choices: ["Nelson Mandela", "F.W. de Klerk", "Desmond Tutu", "Thabo Mbeki"], answer: 0 },
{ question: "Quelle est l'œuvre la plus célèbre de Léonard de Vinci ?", choices: ["La Joconde", "La Cène", "La Dame à l'hermine", "La Vierge aux rochers"], answer: 0 },
{ question: "Qui a peint 'Le Cri' ?", choices: ["Edvard Munch", "Vincent van Gogh", "Salvador Dalí", "Pablo Picasso"], answer: 0 },
{ question: "Quel mouvement artistique est caractérisé par l'utilisation de formes géométriques et de couleurs vives ?", choices: ["Cubisme", "Impressionnisme", "Surréalisme", "Expressionnisme"], answer: 0},
    { question: "Quel artiste est connu pour ses œuvres représentant des montres molles ?", choices: ["Salvador Dalí", "Pablo Picasso", "René Magritte", "Joan Miró"], answer: 0 },
{ question: "Qui a sculpté 'Le Penseur' ?", choices: ["Auguste Rodin", "Michel-Ange", "Donatello", "Gian Lorenzo Bernini"], answer: 0 },
{ question: "Quel est le nom du mouvement artistique qui a cherché à capturer l'impression visuelle d'un moment ?", choices: ["Impressionnisme", "Expressionnisme", "Cubisme", "Surréalisme"], answer: 0 },
{ question: "Qui a peint 'La Nuit étoilée' ?", choices: ["Vincent van Gogh", "Claude Monet", "Edgar Degas", "Paul Cézanne"], answer: 0 },
{ question: "Quel artiste est connu pour ses découpages de papier coloré ?", choices: ["Henri Matisse", "Pablo Picasso", "Georges Braque", "Fernand Léger"], answer: 0 },
{ question: "Qui a peint 'Les Demoiselles d'Avignon' ?", choices: ["Pablo Picasso", "Georges Braque", "Henri Matisse", "Fernand Léger"], answer: 0 },
    { question: "Quel est le nom du mouvement artistique qui a exploré l'inconscient et le rêve ?", choices: ["Surréalisme", "Dadaïsme", "Futurisme", "Expressionnisme"], answer: 0 },
{ question: "Qui a réalisé le film '2001, l'Odyssée de l'espace' ?", choices: ["Stanley Kubrick", "Alfred Hitchcock", "Orson Welles", "Federico Fellini"], answer: 0 },
 { question: "Quel film a remporté l'Oscar du meilleur film en 1994 ?", choices: ["La Liste de Schindler", "Forrest Gump", "Pulp Fiction", "Le Roi Lion"], answer: 0 },
{ question: "Qui a réalisé le film 'Citizen Kane' ?", choices: ["Orson Welles", "Alfred Hitchcock", "John Ford", "Billy Wilder"], answer: 0 },
    { question: "Quel est le nom du premier film parlant de l'histoire du cinéma ?", choices: ["Le Chanteur de jazz", "Metropolis", "Naissance d'une nation", "L'Aurore"], answer: 0 },
 { question: "Quel film de science-fiction met en scène des créatures extraterrestres appelées 'xenomorphes' ?", choices: ["Alien", "Blade Runner", "Star Wars", "E.T. l'extra-terrestre"], answer: 0},
 { question: "Quel est le compositeur de la musique du film 'Psychose' ?", choices: ["Bernard Herrmann", "Ennio Morricone", "John Williams", "Hans Zimmer"], answer: 0 },
    { question: "Quel acteur a joué le rôle principal dans la trilogie 'Le Parrain' ?", choices: ["Al Pacino", "Marlon Brando", "Robert De Niro", "Jack Nicholson"], answer: 0 },
{ question: "Quel est le titre original du film 'Les Dents de la mer' ?", choices: ["Jaws", "Shark", "The Deep", "Open Water"], answer: 0},

];

   let currentQuestionIndex = 0;
   let score = 0;
   let hasAnswered = false;
   let questionsForCurrentGame = [];
   
   // ---------------------------------------------
   // ÉLÉMENTS DU DOM (Raccourcis vers le HTML)
   // ---------------------------------------------
   
   const questionElement = document.getElementById("question");
   const choicesElement = document.getElementById("choices");
   const questionNumberElement = document.getElementById("question-number");
   const currentScoreElement = document.getElementById("current-score");
   const progressElement = document.getElementById("progress");
   const resultElement = document.getElementById("result");
   const resultMessageElement = document.getElementById("result-message");
   const finalScoreElement = document.getElementById("final-score");
   const startButton = document.getElementById("start-button");
   const startScreen = document.getElementById("start-screen");
   const quizContent = document.getElementById("quiz-content");
   
   // ----------------
   // SONS
   // ----------------
   const correctSound = new Audio("correct.mp3"); //  Assurez-vous que le chemin est correct
   const incorrectSound = new Audio("incorrect.mp3");
   
   correctSound.onerror = () => {
       console.error("Erreur de chargement: correct.mp3");
       correctSound = null;
   };
   incorrectSound.onerror = () => {
       console.error("Erreur de chargement: incorrect.mp3");
       incorrectSound = null;
   };
   
   // ----------------------
   // FONCTIONS DU JEU
   // ----------------------
   
   function startGame() {
       // 1. Initialisation
       currentQuestionIndex = 0;
       score = 0;
       hasAnswered = false;
       updateCurrentScoreDisplay(); // Affiche le score initial (0)
   
       // 2. Masquer/afficher les bonnes sections
       resultElement.style.display = "none";
       startScreen.style.display = "none";
       quizContent.style.display = "block";
   
       // 3. Préparer les questions
       prepareQuestions();
   
       // 4. Charger la première question
       loadQuestion();
   }
   
   function prepareQuestions() {
       shuffleArray(easyQuestions);
       shuffleArray(mediumQuestions);
       shuffleArray(hardQuestions);
   
       questionsForCurrentGame = [
           ...easyQuestions.slice(0, 20),
           ...mediumQuestions.slice(0, 20),
           ...hardQuestions.slice(0, 20)
       ];
   
       shuffleArray(questionsForCurrentGame);
   }
   
   
   function shuffleArray(array) {
       for (let i = array.length - 1; i > 0; i--) {
           const j = Math.floor(Math.random() * (i + 1));
           [array[i], array[j]] = [array[j], array[i]];
       }
   }
   
   function loadQuestion() {
       if (currentQuestionIndex >= questionsForCurrentGame.length) {
           endGame(true); // Fin du jeu (victoire)
           return;
       }
   
       hasAnswered = false;
       const currentQuestion = questionsForCurrentGame[currentQuestionIndex];
   
       questionElement.textContent = currentQuestion.question;
       questionNumberElement.textContent = `${currentQuestionIndex + 1} / 60`;
       choicesElement.innerHTML = ""; // Efface les anciens boutons
   
       currentQuestion.choices.forEach((choice, index) => {
           const button = document.createElement("button");
           button.textContent = choice;
           button.classList.add("choice");
           button.classList.add(`choice-${index + 1}`);
           button.addEventListener("click", () => selectAnswer(index));
           choicesElement.appendChild(button);
       });
   
       updateProgressBar();
   
       // Couleurs de fond
       if (currentQuestionIndex < 20) {
           document.body.classList.add("easy-mode");
           document.body.classList.remove("medium-mode", "hard-mode");
       } else if (currentQuestionIndex < 40) {
           document.body.classList.add("medium-mode");
           document.body.classList.remove("easy-mode", "hard-mode");
       } else {
           document.body.classList.add("hard-mode");
           document.body.classList.remove("easy-mode", "medium-mode");
       }
   }
   
   
   function selectAnswer(selectedIndex) {
       if (hasAnswered) return;
       hasAnswered = true;
   
       const currentQuestion = questionsForCurrentGame[currentQuestionIndex];
       const selectedButton = choicesElement.children[selectedIndex];
   
       if (selectedIndex === currentQuestion.answer) {
           // Bonne réponse
           if (currentQuestionIndex < 20) {
               score += 10;
           } else if (currentQuestionIndex < 40) {
               score += 20;
           } else {
               score += 30;
           }
           updateCurrentScoreDisplay();
   
           selectedButton.classList.add("correct-answer");
   
           if (correctSound) correctSound.play();
   
           setTimeout(() => {
               selectedButton.classList.remove("correct-answer");
               currentQuestionIndex++;
               if (currentQuestionIndex < questionsForCurrentGame.length) {
                   loadQuestion();
               } else {
                   endGame(true); // Fin du jeu (victoire)
               }
           }, 500);
   
       } else {
           // Mauvaise réponse
           if (incorrectSound) incorrectSound.play();
           endGame(false); // Fin du jeu (défaite)
       }
   }
   
   function updateCurrentScoreDisplay() {
       currentScoreElement.textContent = score;
   }
   
   function updateProgressBar() {
       const progressPercentage = (currentQuestionIndex / 60) * 100;
       progressElement.style.width = `${progressPercentage}%`;
   
       const redValue = Math.floor(255 * (progressPercentage / 100));
       progressElement.style.backgroundColor = `rgb(${redValue}, ${200 - redValue}, 0)`;
   }
   
   //*** Fonction endGame CORRECTE (vérifiée) ***
   function endGame(isWin) {
       // Masque/affiche les sections
       choicesElement.innerHTML = ""; // Efface les boutons
       questionElement.textContent = ""; // Efface la question
   
       quizContent.style.display = "none"; // Cache le quiz
       startScreen.style.display = "block"; // Montre l'écran de démarrage
       resultElement.style.display = "block"; // Affiche l'écran de résultat
   
   
       // Affiche le message et le score
       if (isWin) {
           resultMessageElement.textContent = "Félicitations ! Vous avez gagné !";
           finalScoreElement.textContent = ""; // Pas de score si victoire
       } else {
           resultMessageElement.textContent = "Vous avez perdu !"; // Message de défaite
           finalScoreElement.textContent = `Score final : ${score} points`; // Score final
       }
   
       startButton.textContent = "Recommencer la partie"; //modifie le texte du bouton
        // Gère les listeners (simplifié et correct)
       startButton.removeEventListener("click", startGame);
       startButton.addEventListener("click", startGame);
   
       // Réinitialise l'état du jeu
       progressElement.style.width = "0%";
       questionNumberElement.textContent = "";
       document.body.classList.remove("easy-mode", "medium-mode", "hard-mode");
   }
   
   
   // Lance le jeu au clic sur le bouton "Démarrer"
   startButton.addEventListener("click", startGame);

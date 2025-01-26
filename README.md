# Projet de fin de module NoSQL

Ce projet consiste en la création d'une API backend pour une plateforme d'apprentissage en ligne. Voici un guide pour installer et lancer le projet, ainsi qu'une description de sa structure et des choix techniques effectués.

---

## **Installation et lancement du projet**

### **1. Pré-requis**
- Node.js .
- MongoDB .
- Git .

### **2. Installation**

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/sunriskk/learning-platform-nosql.git
   ```

2. Accédez au répertoire du projet :
   ```bash
   cd learning-platform-nosql
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

4. Configurez les variables d'environnement :
   - Copiez le fichier `.env` en utilisant l'exemple fourni.
   - Remplissez les informations nécessaires (ex. URL MongoDB, port, etc.).

5. Démarrez le projet :
   ```bash
   npm start
   ```

---

## **Structure du projet**

La structure du projet suit une organisation modulaire, facilitant la lisibilité et la maintenabilité.

```
learning-platform-nosql
├── src
│   ├── config        # Configuration de l'application (base de données, variables d'environnement)
│   ├── controllers   # Contrôleurs pour gérer la logique des requêtes
│   ├── models        # Définition des modèles MongoDB
│   ├── routes        # Définition des routes de l'API
│   ├── services      # Services pour la logique métier
│   └── utils         # Utilitaires (gestion des erreurs, validation, etc.)
├── .env              # Fichier des variables d'environnement
├── package.json      # Fichier de gestion des dépendances Node.js
├── README.md         # Documentation du projet
```

---

## **Choix techniques**

### **1. Base de données**
- **MongoDB** a été choisi pour sa flexibilité et sa capacité à gérer des données non structurées ou semi-structurées.

### **2. Framework backend**
- **Express.js** a été utilisé pour sa simplicité et sa rapidité dans la création d'API REST.

### **3. Variables d'environnement**
- Le fichier `.env` permet de centraliser les configurations sensibles (URL MongoDB, port du serveur, etc.).

### **4. Séparation des responsabilités**
- Une organisation claire du code (routes, contrôleurs, services, etc.) assure une extensibilité et une maintenabilité optimales.

### **5. Gestion des erreurs**
- Une gestion globale des erreurs est mise en place pour répondre aux cas limites et fournir des messages clairs.

---

## **Réponses aux questions des commentaires dans le code**
 
**Question :  Pourquoi créer un module séparé pour les connexions aux bases de données ?** 
-Avoir un module distinct pour les connexions facilite :
La centralisation de la logique de connexion.
La réutilisation dans différentes parties de l'application.
Une gestion efficace des options de connexion et des erreurs.
La simplification des tests grâce à la possibilité de mocker les connexions.
La maintenabilité globale du code.

**Question : Comment gérer proprement la fermeture des connexions ?**
-Une gestion soignée de la fermeture inclut :
L'utilisation de gestionnaires d'événements pour intercepter les signaux de fin (SIGTERM, SIGINT).
La fermeture des connexions dans l'ordre inverse de leur ouverture.
L'attente de la fin des requêtes en cours avant de procéder.
L'application de délais pour éviter des fermetures bloquantes.
La journalisation des étapes pour simplifier le débogage.

**Question : Pourquoi est-il important de valider les variables d'environnement au démarrage ?**
- Valider ces variables dès le départ permet de :
Repérer rapidement les erreurs de configuration.
Prévenir les problèmes en production liés à des variables absentes.
Rendre claires les dépendances de l'application.
Faciliter la résolution de bugs.
Renforcer la robustesse globale.

**Question : Que se passe-t-il si une variable requise est manquante ?**
 -En cas d'absence d'une variable essentielle :
L'application doit échouer rapidement (fail fast).
Un message d'erreur clair doit indiquer quelle variable manque.
Ce message doit fournir des instructions pour corriger le problème.
Les journaux doivent identifier clairement la source de l'erreur.
L'application ne doit pas démarrer dans un état non stable.

**Question : Quelle est la différence entre un contrôleur et une route ?**
-Les principales distinctions sont :
Les routes définissent les points d'entrée HTTP et leurs méthodes (GET, POST, etc.).
Les contrôleurs gèrent la logique de traitement des requêtes.
Les routes redirigent les requêtes vers les fonctions des contrôleurs.
Les contrôleurs incluent la logique métier et communiquent avec les services.
Les routes se concentrent sur la configuration des endpoints.

**Question : Pourquoi séparer la logique métier des routes ?**
- Cette séparation permet :
Une organisation optimale grâce au principe de responsabilité unique.
Une meilleure réutilisation de la logique métier.
Une rédaction plus simple des tests unitaires.
Une maintenance facilitée en limitant les changements localisés.
Une évolutivité accrue de l'application.

**Question : Pourquoi séparer les routes dans différents fichiers ?**
-Diviser les routes en plusieurs fichiers apporte :
Une organisation par domaine fonctionnel.
Une maintenance simplifiée grâce à des périmètres limités.
Une collaboration plus aisée entre plusieurs développeurs.
Une meilleure lisibilité du code.
Un versionnement plus efficace avec moins de conflits.

**Question : Comment organiser les routes de manière cohérente ?**
-Pour une organisation logique des routes, il faut :
Les regrouper par domaine fonctionnel ou ressource.
Adopter une nomenclature cohérente pour les URLs.
Suivre les conventions REST si applicables.
Documenter clairement les paramètres attendus.
Maintenir une hiérarchie logique dans leur structure.

**Question : Pourquoi créer des services séparés ?**
-Concevoir des services distincts permet de :
Isoler la logique métier complexe.
Réutiliser du code entre plusieurs contrôleurs.
Simplifier les tests unitaires.
Gérer efficacement les dépendances externes.
Améliorer la maintenabilité.

**Question : Comment gérer efficacement le cache avec Redis ?**
- Une bonne gestion du cache Redis implique :
La définition d'une stratégie de mise en cache (durée, invalidation).
Une gestion adéquate des erreurs de Redis.
L'adoption de patterns comme le cache-aside.
Une politique d'expiration adaptée aux données.
Un suivi des performances du cache.

**Question : Quelles sont les bonnes pratiques pour les clés Redis ?**
- Les pratiques recommandées pour les clés Redis incluent :
L'utilisation de préfixes pour regrouper les clés logiquement.
Une convention de nommage claire et cohérente.
L'évitement des clés trop longues pour limiter l'utilisation de mémoire.
L'inclusion de la version des données dans la clé si nécessaire.
Une documentation des structures de clés utilisées.

**Question : Comment organiser le point d'entrée de l'application ?**
-Le point d'entrée doit :
Initialiser les composants dans l'ordre approprié.
Valider la configuration dès le départ.
Mettre en place une gestion globale des erreurs.
Configurer les middlewares essentiels.
Établir les connexions avec les bases de données.

**Question : Quelle est la meilleure façon de gérer le démarrage de l'application ?**
 -Une gestion efficace du démarrage repose sur :
Une séquence bien définie d'initialisation des composants.
Une gestion solide des erreurs rencontrées au démarrage.
Des journaux détaillés pour suivre les étapes.
Une vérification de l'état des dépendances critiques.
Un mécanisme de reprise pour les connexions importantes.

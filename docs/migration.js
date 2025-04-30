// migration.js
// Script pour migrer les données des fichiers JSON vers Firebase

import { db, collection, addDoc } from './firebase-config.js';

// Fonction pour migrer les projets
export async function migrateProjects() {
    try {
        console.log('Début de la migration des projets...');
        
        // Récupérer les projets depuis le fichier JSON
        const response = await fetch('projets.json');
        const projects = await response.json();
        
        // Nombre de projets à migrer
        console.log(`${projects.length} projets trouvés à migrer.`);
        
        // Ajouter chaque projet à Firebase
        for (const project of projects) {
            await addDoc(collection(db, "projects"), project);
            console.log(`Projet migré: ${project.titre}`);
        }
        
        console.log('Migration des projets terminée avec succès!');
    } catch (error) {
        console.error('Erreur lors de la migration des projets:', error);
        throw error; // Propager l'erreur pour la gestion au niveau supérieur
    }
}

// Fonction pour migrer les messages
export async function migrateMessages() {
    try {
        console.log('Début de la migration des messages...');
        
        // Récupérer les messages depuis le fichier JSON
        const response = await fetch('messages.json');
        const messages = await response.json();
        
        // Nombre de messages à migrer
        console.log(`${messages.length} messages trouvés à migrer.`);
        
        // Ajouter chaque message à Firebase
        for (const message of messages) {
            await addDoc(collection(db, "messages"), message);
            console.log(`Message migré de: ${message.nom}`);
        }
        
        console.log('Migration des messages terminée avec succès!');
    } catch (error) {
        console.error('Erreur lors de la migration des messages:', error);
        throw error; // Propager l'erreur pour la gestion au niveau supérieur
    }
}
// contact-form.js
// Gestion du formulaire de contact avec Firebase

import { db, collection, addDoc } from './firebase-config.js';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (form && formMessage) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Récupérer les données du formulaire
            const formData = new FormData(form);
            const contactData = {
                nom: formData.get('nom'),
                email: formData.get('email'),
                message: formData.get('message'),
                date: new Date().toISOString()
            };
            
            // Désactiver le bouton d'envoi
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.disabled = true;
            submitButton.innerHTML = '<div class="animate-spin mr-2 h-4 w-4 border-2 border-white rounded-full border-t-transparent inline-block"></div> Envoi...';
            
            try {
                // Ajouter le message à la collection Firebase
                await addDoc(collection(db, "messages"), contactData);
                
                // Afficher un message de succès
                formMessage.textContent = "Message envoyé avec succès! Nous vous répondrons bientôt.";
                formMessage.classList.remove('hidden', 'text-red-500');
                formMessage.classList.add('text-green-500');
                
                // Réinitialiser le formulaire
                form.reset();
            } catch (error) {
                console.error("Erreur lors de l'envoi du message:", error);
                
                // Afficher un message d'erreur
                formMessage.textContent = "Une erreur s'est produite. Veuillez réessayer plus tard.";
                formMessage.classList.remove('hidden', 'text-green-500');
                formMessage.classList.add('text-red-500');
            } finally {
                // Réactiver le bouton d'envoi
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
                
                // Masquer le message après 5 secondes
                setTimeout(function() {
                    formMessage.classList.add('hidden');
                }, 5000);
            }
        });
    }
});
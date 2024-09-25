const express = require('express');
const path = require('path'); // Importation de path pour gérer les chemins

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public'))); // Assurez-vous que le dossier public existe et contient vos fichiers

// Route de base
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Chemin vers votre fichier HTML
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
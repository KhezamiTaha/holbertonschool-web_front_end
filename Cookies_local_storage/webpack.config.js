const path = require('path');

module.exports = {
  entry: './src/index.js', // Point d'entrée principal
  output: {
    filename: 'bundle.js', // Nom du fichier de sortie
    path: path.resolve(__dirname, 'dist'), // Répertoire de sortie
  },
  mode: 'development', // Définit le mode développement
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Sert les fichiers statiques depuis 'public'
    },
    port: 8080, // Définit le port du serveur
  },
};

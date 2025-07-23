const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json()); // Permite leer JSON en las peticiones

// Importar rutas
const songRoutes = require('./routes/songs');
app.use('/songs', songRoutes);

// Conectar a la base de datos usando la URL del archivo .env
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Conexión a MongoDB exitosa"))
    .catch(err => console.error("❌ Error conectando a MongoDB:", err));

// Iniciar el servidor en el puerto definido
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});


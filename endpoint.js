const express = require('express');
const app = express();
const port = 3000;

const { sequelize } = require('./db_connection');
const { Hewan } = require('./models');


//Sinkronisasi db
sequelize.sync()
  .then(() => {
    console.log('Database terhubung dan disinkronkan.');
  })
  .catch((error) => {
    console.error('Error sinkronisasi database:', error);
  });

app.get('/api/data', (req, res) => {
  // Implementasi logika atau sumber data
  const data = { message: 'Hello from the server!' };
  res.json(data);
});


app.get('/api/data_hewan', async (req, res) => {
  // Implementasi logika atau sumber data
  try {
    const hewan = await Hewan.findAll();
    res.json(hewan);
  } catch (error) {
    console.error('Error mendapatkan hewan:', error);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data hewan.' });
  }
});





app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`); //ganti
});

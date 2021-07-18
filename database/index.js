const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pokedex', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const pokemonSchema = new mongoose.Schema({
  name: {type: String, unique: true},
  img: String,
  type: String
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

const pokeDB = {
  pokemon: {
    insert: (pokemon) => Pokemon.create(pokemon),
    retrieve: () => Pokemon.find()
  }
}

const seeded = true;
if (!seeded) {
  const data = require('./pokemon.json');
  pokeDB.pokemon.insert(data)
    .catch(err => {
      if (err.code === 11000) {
        console.log('Duplicate entries skipped.');
      } else {
        console.error(err);
      }
    })
}

module.exports = pokeDB;
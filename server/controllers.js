const Database = require('../database/index');

module.exports = {
  pokemon: {
    insert: (req, res) => {
      Database.pokemon.insert(req.body)
        .then(response => res.status(200).json(response))
        .catch(err => res.status(404).json(err))
    },
    retrieve: (req, res) => {
      console.log('retrieve');
      Database.pokemon.retrieve()
        .then(response => res.status(200).json(response))
        .catch(err => res.status(404).json(err))
    }
  }
}
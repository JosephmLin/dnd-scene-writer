const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const npcSchema = new Schema(
  {
    occupation: { type: String },
    appearance: { type: String },
    abilities: { type: String },
    talent: { type: String },
    mannerism: { type: String },
    interaction: { type: String },
    ideal: { type: String },
    bond: { type: String },
    flaw: { type: String },
    name: { type: String },
  },
  {
    collection: 'npc',
  }
);

module.exports = mongoose.model('Npc', npcSchema);

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet_food_type').del()
  await knex('pet_food_type').insert([
    { id: 1, type: 'kibble' },
    { id: 2, type: 'wet food' },
    { id: 3, type: 'flakes' }
  ]);
};

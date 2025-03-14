exports.up = function(knex) {
    return knex.schema.createTable('pet', table => {
      table.increments();
      table.string('name', 250);
      table.integer('pet_type_id').references('id').inTable('pet_type');
      table.integer('pet_food_type_id').references('id').inTable('pet_food_type');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pet');
  };
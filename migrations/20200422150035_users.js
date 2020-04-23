
exports.up = function(knex) {
 return knex.schema.createTable('users', tbl => {
      tbl.primary();
      tbl.string('Username', 255).notNullable();
      tbl.string('Password', 255).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};

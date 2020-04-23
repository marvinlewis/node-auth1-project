
exports.up = function(knex) {
 return knex.schema.createTable('users', tbl => {
      tbl.primary();
      tbl.string('username', 255).notNullable().unique();
      tbl.string('password', 255).notNullable();
      tbl.string('first_name', 255);
      tbl.string('last_night', 255);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};

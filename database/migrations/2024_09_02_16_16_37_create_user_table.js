const { Schema } = require("jcc-eloquent");
class Migration {
  up() {
    return Schema.create("users", (table) => {
      table.id();
      table.string("name");
      table.string("email").unique();
      table.string("password");
      table.timestamps();
      table.softDeletes();
    });
  }
}

module.exports = new Migration();

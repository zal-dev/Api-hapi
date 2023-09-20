const TodoHandler = require("./handler");
const routes = require("./routes");
// const TodoServices = require("./services/TodoServices");

module.exports = {
  name: "todo",
  version: "1.0.0",
  register: async (server, { service }) => {
    const todoHandler = new TodoHandler(service);
    server.route(routes(todoHandler));
  },
};

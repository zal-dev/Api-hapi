const Hapi = require("@hapi/hapi");
const todo = require("./api/todo/");
const TodoServices = require("./services/TodoServices");

const init = async () => {
  const todoServices = new TodoServices();

  const server = Hapi.server({
    port: 5000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  // server.route(routes);

  await server.register({
    plugin: todo,
    options: {
      service: todoServices,
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

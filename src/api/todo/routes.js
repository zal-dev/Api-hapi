const routes = (handler) => [
  {
    // POST: http://localhost:5000/todo
    method: "POST",
    path: "/todo",
    handler: handler.postTodoHandler,
  },
  {
    // GET: http://localhost:5000/todo
    method: "GET",
    path: "/todo",
    handler: handler.getTodoHandler,
  },
  {
    // PUT: http://localhost:5000/todo/{id}
    method: "PUT",
    path: "/todo/{id}",
    handler: handler.putTodoHandler,
  },
  {
    // DELETE: http://localhost:5000/todo/{id}
    method: "DELETE",
    path: "/todo/{id}",
    handler: handler.deleteTodoHandler,
  },
];

module.exports = routes;

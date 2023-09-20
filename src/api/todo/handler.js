class TodoHandler {
  constructor(service) {
    this._service = service;

    this.postTodoHandler = this.postTodoHandler.bind(this);
    this.getTodoHandler = this.getTodoHandler.bind(this);
    this.putTodoHandler = this.putTodoHandler.bind(this);
    this.deleteTodoHandler = this.deleteTodoHandler.bind(this);
  }
  // todo = {id: string, task: string, finished: boolean, insertedAt: string tanggal, updatedAt: string tanggal }
  postTodoHandler(request, h) {
    const { task } = request.payload;

    const todoId = this._service.postTodo({ task });

    if (!todoId) {
      const response = h.response({
        status: "fail",
        message: "Todo gagal ditambahkan",
      });
      response.code(400);
      return response;
    }
    const response = h.response({
      status: "success",
      message: "Successfully added todo post",
      data: { todoId },
    });
    response.code(201);
    return response;
  }
  getTodoHandler() {
    const todos = this._service.getTodos();
    return {
      status: "Todo list success",
      data: { todos },
    };
  }
  putTodoHandler(request, h) {
    const { id } = request.params;

    const todoId = this._service.updateTodo(id);

    if (!todoId) {
      const response = h.response({
        status: "fail",
        message: "Todo gagal diupdate",
      });
      response.code(400);
      return response;
    }
    const response = h.response({
      status: "success",
      message: "Successfully updated todo post",
      data: { todoId },
    });
    response.code(201);
    return response;
  }
  deleteTodoHandler(request, h) {
    const { id } = request.params;

    const todoId = this._service.deleteTodo(id);

    if (!todoId) {
      const response = h.response({
        status: "fail",
        message: "Todo gagal dihapus",
      });
      response.code(400);
      return response;
    }
    const response = h.response({
      status: "success",
      message: "Successfully delete todo post",
      data: { todoId },
    });
    response.code(200);
    return response;
  }
}

module.exports = TodoHandler;

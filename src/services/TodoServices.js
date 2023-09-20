const { nanoid } = require("nanoid");

class TodoServices {
  constructor() {
    this._todos = [];
  }

  // todo = {id: string, task: string, finished: boolean, insertedAt: string tanggal, updatedAt: string tanggal }

  postTodo({ task }) {
    const id = nanoid(16);
    const finished = false;
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;

    // Prepare Todo yang baru
    const newTodo = { id, task, finished, insertedAt, updatedAt };

    // Tambahkan ke daftar todo
    this._todos.push(newTodo);

    //check apakah berhasil disimpan
    const success = this._todos.filter((todo) => todo.id === id).length > 0;

    if (!success) {
      return false;
    }

    return id;
  }
  getTodos() {
    return this._todos;
  }
  updateTodo(id) {
    const index = this._todos.findIndex((todo) => todo.id === id);
    const updatedAt = new Date().toISOString();

    if (index === -1) {
      return false;
    }
    this._todos[index].finished = true;
    this._todos[index].updatedAt = updatedAt;

    return id;
  }
  deleteTodo(id) {
    const index = this._todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
      return false;
    }

    // Hapus todo dengan ID yang sesuai
    this._todos.splice(index, 1);

    return id;
  }
}

module.exports = TodoServices;

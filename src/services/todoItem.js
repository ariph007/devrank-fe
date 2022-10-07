import axios from "axios";

class TodoItemService {
  http = axios.create({
    baseURL: process.env.REACT_APP_API,
  });

  async getListTodo(id) {
    const response = await this.http.get(`todo-items?activity_group_id=${id}`);
    return response.data.data;
  }

  async createTodo(activity_group_id, priority, title) {
    const response = await this.http.post("/todo-items", {
      activity_group_id,
      priority,
      title,
    });
    return response.data;
  }

  async updateTodo(id, is_active, priority, title) {
    const response = await this.http.patch(`todo-items/${id}`, {
      is_active,
      priority,
      title,
    });
    return response.data;
  }

  async deleteSingleTodo(id) {
    const response = await this.http.delete(`todo-items/${id}`);
    return response.data;
  }
}

export default new TodoItemService();

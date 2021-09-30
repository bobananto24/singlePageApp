import axios from 'axios';

export async function AuthApi(data) {
  try {
    return await axios.post(`auth/login`, data);
  } catch (e) {
    return e;
  }
}
export async function ReAuthApi() {
  try {
    return await axios.get(`auth/re-auth`);
  } catch (e) {
    return e;
  }
}
export async function SignupApi(data) {
  try {
    return await axios.post(`auth/signup`, data);
  } catch (e) {
    return e;
  }
}
export async function GetTodoListApi(userId) {
  try {
    return await axios.get(`listTitle/${userId}`);
  } catch (e) {
    return e;
  }
}
export async function AddTodoApi(userId, data) {
  try {
    return await axios.post(`addTitle/${userId}`, data);
  } catch (e) {
    return e;
  }
}
export async function UpdateTodoApi(todoId, data) {
  try {
    return await axios.patch(`updateTitle/${todoId}`, data);
  } catch (e) {
    return e;
  }
}
export async function DeleteTodoApi(todoId) {
  try {
    return await axios.delete(`deleteTitle/${todoId}`);
  } catch (e) {
    return e;
  }
}
export async function AddSubTodoApi(titleId, data) {
  try {
    return await axios.post(`addTodo/${titleId}`, data);
  } catch (e) {
    return e;
  }
}
export async function UpdateSubTodoApi(titleId, listId, data) {
  try {
    return await axios.patch(`updateTodo/${titleId}/${listId}`, data);
  } catch (e) {
    return e;
  }
}
export async function DeleteSubTodoApi(titleId, listId) {
  try {
    return await axios.delete(`deleteTodo/${titleId}/${listId}`);
  } catch (e) {
    return e;
  }
}
export async function DeleteAllSubTodoApi(titleId) {
  try {
    return await axios.delete(`deleteTodo/${titleId}`);
  } catch (e) {
    return e;
  }
}

import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const addTodo = (newTodo: Omit<Todo, 'id'>) => {
  return client.post('/todos', newTodo);
};

export const editTodo = (editedTodo: Todo) => {
  return client.patch(`/todos/${editedTodo.id}`, {
    completed: editedTodo.completed,
    title: editedTodo.title,
  });
};

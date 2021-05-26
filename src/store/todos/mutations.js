import { date } from 'quasar';

export const addTodo = (state, todo) => {
  state.todos.push(todo);
};

export const refreshTicker = (state) => {
  state.now = new Date();
  state.halfHourLater = date.addToDate(new Date(), { minutes: 30 });
};

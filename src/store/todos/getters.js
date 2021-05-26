import { date } from 'quasar';

export const getIncomingTasks = (state) => {
  const dateFrom = state.now;
  const dateTo = state.halfHourLater;

  return state.todos.filter(
    (todo) => date.isBetweenDates(new Date(`${todo.date} ${todo.time}`), dateFrom, dateTo, { inclusiveFrom: true, inclusiveTo: true }),
  );
};

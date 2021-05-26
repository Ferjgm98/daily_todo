import { date } from 'quasar';

// eslint-disable-next-line func-names
export default function () {
  return {
    todos: [],
    isLoading: false,
    now: new Date(),
    halfHourLater: date.addToDate(new Date(), { minutes: 30 }),
  };
}

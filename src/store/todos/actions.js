const TICKER_INTERVAL = 3000;
let tickerPointer = null;

export const startTicker = ({ commit }) => {
  if (tickerPointer === null) {
    commit('refreshTicker');
    tickerPointer = setInterval(() => {
      commit('refreshTicker');
    }, TICKER_INTERVAL);
  }
};

export const haltTicker = () => {
  clearInterval(tickerPointer);
  tickerPointer = null;
};

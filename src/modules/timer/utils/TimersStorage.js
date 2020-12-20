const TIMERS_KEY = "dt-timers";

export default class TimersStorage {
  saveAll(timersState) {
    localStorage.setItem(TIMERS_KEY, JSON.stringify(timersState));
  }

  getAll() {
    const v = localStorage.getItem(TIMERS_KEY);
    return v ? JSON.parse(v) : null;
  }
}

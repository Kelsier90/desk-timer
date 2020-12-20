import { DEFAULT_TIMER_TIME, MAX_TIMERS_LENGTH } from "../utils/constants";
import TimersStorage from "../utils/TimersStorage";
import { timerStatus } from "./TimersContext";

const timerActions = {
  createTimer: 1,
  updateTimer: 2,
  removeTimer: 3,
  selectTimer: 4,
  addTime: 5,
  runTimer: 6,
  pauseTimer: 7,
  resetTimer: 8,
  finishTimer: 9,
};

const reduce = (state, action) => {
  switch (action.type) {
    case timerActions.createTimer:
      return reduceCreateTimer(state, action);
    case timerActions.updateTimer:
      return reduceUpdateTimer(state, action);
    case timerActions.removeTimer:
      return reduceRemoveTimer(state, action);
    case timerActions.selectTimer:
      return reduceSelectTimer(state, action);
    case timerActions.addTime:
      return reduceAddTime(state, action);
    case timerActions.runTimer:
      return reduceRunTimer(state, action);
    case timerActions.pauseTimer:
      return reducePauseTimer(state, action);
    case timerActions.resetTimer:
      return reduceResetTimer(state, action);
    case timerActions.finishTimer:
      return reduceFinishTimer(state, action);
    default:
      throw new Error(`Action ${action.type} is not supported`);
  }
};

export function timersReducer(state, action) {
  const newState = reduce(state, action);
  const timersStorage = new TimersStorage();
  timersStorage.saveAll(newState);
  return newState;
}

export const dispatchCreateTimer = (dispatch) => {
  dispatch({ type: timerActions.createTimer });
};

const reduceCreateTimer = (state) => {
  if (state.timers.length === MAX_TIMERS_LENGTH) return state;
  const timersCopy = [...state.timers];
  timersCopy.push({
    id: Date.now(),
    label: "",
    time: DEFAULT_TIMER_TIME,
    status: timerStatus.idle,
  });

  return { ...state, timers: timersCopy };
};

export const dispatchUpdateTimer = (dispatch, timerIndex, { label, time }) => {
  dispatch({
    type: timerActions.updateTimer,
    payload: { timerIndex, label, time },
  });
};

const reduceUpdateTimer = (state, action) => {
  const {
    payload: { timerIndex, label, time },
  } = action;

  const timersCopy = [...state.timers];
  let timer = timersCopy[timerIndex];
  if (!timer) return state;
  timer = { ...timer, label, time };
  timersCopy[timerIndex] = timer;

  return {
    ...state,
    timers: timersCopy,
  };
};

export const dispatchRemoveTimer = (dispatch, timerIndex) => {
  dispatch({ type: timerActions.removeTimer, payload: { timerIndex } });
};

const reduceRemoveTimer = (state, action) => {
  if (state.timers.length === 1) return state;
  const {
    payload: { timerIndex },
  } = action;
  const timers = state.timers.filter((t, i) => i !== timerIndex);
  return { ...state, timers, selectedTimer: 0 };
};

export const dispatchSelectTimer = (dispatch, timerIndex) => {
  dispatch({ type: timerActions.selectTimer, payload: { timerIndex } });
};

const reduceSelectTimer = (state, action) => {
  const {
    payload: { timerIndex },
  } = action;

  if (state.timers[timerIndex]) {
    return { ...state, selectedTimer: timerIndex };
  }

  return state;
};

export const dispatchAddTime = (dispatch, timerIndex, timeToAdd) => {
  dispatch({ type: timerActions.addTime, payload: { timerIndex, timeToAdd } });
};

const reduceAddTime = (state, action) => {
  const { payload } = action;

  const timersCopy = [...state.timers];
  let timer = timersCopy[payload.timerIndex];
  if (!timer) return state;
  timer = { ...timer };
  timer.time += payload.timeToAdd;
  timersCopy[payload.timerIndex] = timer;

  return {
    ...state,
    timers: timersCopy,
  };
};

export const dispatchRunTimer = (dispatch, timerIndex) => {
  dispatch({ type: timerActions.runTimer, payload: { timerIndex } });
};

const reduceRunTimer = (state, action) => {
  const {
    payload: { timerIndex },
  } = action;

  return changeTimerStatus(state, timerIndex, timerStatus.running);
};

export const dispatchPauseTimer = (dispatch, timerIndex) => {
  dispatch({ type: timerActions.pauseTimer, payload: { timerIndex } });
};

const reducePauseTimer = (state, action) => {
  const {
    payload: { timerIndex },
  } = action;

  return changeTimerStatus(state, timerIndex, timerStatus.paused);
};

export const dispatchResetTimer = (dispatch, timerIndex) => {
  dispatch({ type: timerActions.resetTimer, payload: { timerIndex } });
};

const reduceResetTimer = (state, action) => {
  const {
    payload: { timerIndex },
  } = action;

  return changeTimerStatus(state, timerIndex, timerStatus.idle);
};

export const dispatchFinishTimer = (dispatch, timerIndex) => {
  dispatch({ type: timerActions.finishTimer, payload: { timerIndex } });
};

const reduceFinishTimer = (state, action) => {
  const {
    payload: { timerIndex },
  } = action;

  return changeTimerStatus(state, timerIndex, timerStatus.finished);
};

const changeTimerStatus = (state, timerIndex, status) => {
  const timersCopy = [...state.timers];
  let timer = timersCopy[timerIndex];
  if (!timer || timer.status === status) return state;
  timer = { ...timer };
  timer.status = status;
  timersCopy[timerIndex] = timer;

  return { ...state, timers: timersCopy };
};

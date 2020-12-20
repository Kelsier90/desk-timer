import React from "react";
import ClockContainer from "../../modules/clock/ClockContainer";
import { TimersContextProvider } from "../../modules/timer/context/TimersContext";
import TimerAddContainer from "../../modules/timer/TimerAddContainer";
import TimerAddTimeContainer from "../../modules/timer/TimerAddTimeContainer";
import TimerListContainer from "../../modules/timer/TimerListContainer";
import TimerPlayContainer from "../../modules/timer/TimerPlayContainer";
import TimerRemoveContainer from "../../modules/timer/TimerRemoveContainer";
import TimerSelectorContainer from "../../modules/timer/TimerSelectorContainer";
import AppContainer from "../../shared/layout/AppContainer";

export default function TimerPage() {
  return (
    <TimersContextProvider>
      <AppContainer>
        <ClockContainer />
        <div></div>
        <TimerAddContainer />

        <div></div>
        <TimerListContainer />
        <TimerSelectorContainer />

        <TimerAddTimeContainer />
        <TimerPlayContainer />
        <TimerRemoveContainer />
      </AppContainer>
    </TimersContextProvider>
  );
}

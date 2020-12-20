import React from "react";

export default function useAudio(url, loop = false) {
  const [audio] = React.useState(() => {
    const audio = new Audio(url);
    audio.loop = loop;
    return audio;
  });

  const play = () => {
    audio.play();
  };

  const stop = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  return { play, stop };
}

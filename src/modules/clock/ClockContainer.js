import React from "react";
import Clock from "./Clock";
import useIsMounted from "../../shared/utils/hooks/useIsMounted";

export default function ClockContainer() {
  const [hours, setHours] = React.useState("");
  const [minutes, setMinutes] = React.useState("");
  const isMounted = useIsMounted();
  const clockInterval = React.useRef(null);

  const updateTime = () => {
    const now = new Date();
    setHours(now.getHours().toString().padStart(2, "0"));
    setMinutes(now.getMinutes().toString().padStart(2, "0"));
  };

  React.useEffect(() => {
    updateTime();

    clockInterval.current = setInterval(() => {
      if (isMounted) updateTime();
    }, 60000);

    return () => {
      if (clockInterval.current) clearImmediate(clockInterval.current);
    };
  }, [isMounted]);

  return <Clock hours={hours} minutes={minutes} />;
}

import React from "react";

export default function useIsMounted() {
  const isMountedRef = React.useRef();

  React.useLayoutEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  });

  return isMountedRef.current;
}

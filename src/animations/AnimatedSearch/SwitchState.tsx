import React from "react";
import {
  animated,
  config as defaultConfig,
  useSpring,
  SpringConfig,
} from "react-spring";
import { CSSProperties } from "styled-components";

type Props = {
  isHover?: boolean;
  children: React.ReactNode;
  width: string;
  config?: SpringConfig;
} & React.HTMLAttributes<HTMLDivElement>;

function SwitchState({ isHover, children, width, config, ...props }: Props) {
  const styles = useSpring<CSSProperties>({
    to: async (next, cancel) => {
      await next(isHover ? { display: "block" } : { width: "0px" });
      await next(isHover ? { width: width } : { display: "none" });
      cancel();
    },
    from: { width: "0px", display: "none" },
    config: config || defaultConfig.default,
  });
  return (
    <animated.div style={{ ...styles }} {...props}>
      {children}
    </animated.div>
  );
}

export default SwitchState;

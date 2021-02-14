import React from "react"
import { useSpring, animated } from "react-spring";

const ApearAnimation = ({delayTime,children, duration}) =>{

  //A spring simply animates values from one state to another.
  const properties = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: delayTime,
    config: { duration: duration , tension:100, mass: 500},
    reset : true,
  });

  return <animated.div style={properties}>{children}</animated.div>;

}

ApearAnimation.defaultProps = {
    delayTime: 0,
    duration: 0
  };

export default ApearAnimation
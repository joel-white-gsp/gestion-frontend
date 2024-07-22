import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function getAnimationSettings(originXA, originXB) {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 150,
    decay: 0.9,
    gravity: 1.5,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2
    }
  };
}

export default function FireworksConfetti(props) {
  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState();

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 500));
    }
  }, [intervalId, nextTickAnimation]);

  const pauseAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
  }, [intervalId]);

  const stopAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    refAnimationInstance.current && refAnimationInstance.current.reset();
  }, [intervalId]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  useEffect(() => {
    if (props.start) {
      startAnimation()
    } else {
      pauseAnimation()
    }
  }, [props.start])

  return (
    <>
      <ReactCanvasConfetti 
        className="gift-accept-confetti" 
        refConfetti={getInstance} 
        style={{
          position: "fixed",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 2000,
        }} 
      />
    </>
  );
}

import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./animation.css";

export default function Animation() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./book.json"),
    });
  }, []);

  return <div className="animation" ref={container}></div>;
}

import React, { useEffect, useRef } from "react";
import "./Loading.css";

const Loading = ({ loading }) => {

  const loadingRef = useRef();

  const removeFromDom = () => {
    console.log("Removing from dom")
    loadingRef.current.classList.add("hidden");
  }

  useEffect(() => {
    if (!loading) {
      loadingRef.current.classList.add("visually-hidden");
      loadingRef.current.addEventListener("transitionend", removeFromDom);
    }
  }, [loading])

  return (
    <div className="loading-container" ref={loadingRef}>
      <div className="loading-image-container"></div>
    </div>
  )
}

export default Loading

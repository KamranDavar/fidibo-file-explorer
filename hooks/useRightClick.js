import { useState } from "react";

const useRightClick = () => {
  const [context, setContext] = useState(false);
  const [isDirectory, setisDirectory] = useState(null);
  const [xYPosistion, setXyPosistion] = useState({ x: 0, y: 0 });

  const showNav = (event, isDir) => {
    event.preventDefault();
    setContext(false);
    const positionChange = {
      x: event.pageX,
      y: event.pageY,
    };
    setXyPosistion(positionChange);
    setContext(true);
    setisDirectory(isDir);
  };

  const hideContext = () => {
    setContext(false);
  };

  return { context, isDirectory, xYPosistion, showNav, hideContext };
};

export default useRightClick;

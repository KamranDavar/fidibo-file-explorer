import { useState } from "react";

const useRightClick = () => {
  const [context, setContext] = useState(false);
  const [isDirectory, setIsDirectory] = useState(null);
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
    setIsDirectory(isDir);
  };

  const hideContext = () => {
    setContext(false);
  };

  return { context, isDirectory, xYPosistion, showNav, hideContext };
};

export default useRightClick;

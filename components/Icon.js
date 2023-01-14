import React from "react";
import { AiFillFile, AiOutlineDown, AiOutlineRight } from "react-icons/ai";

export const Icon = ({ isDir, open }) => {
  return (
    <div className="shrink">
      {!isDir ? <AiFillFile  className="inline"/> : !open ? <AiOutlineRight  className="inline" /> : <AiOutlineDown className="inline" />}
    </div>
  );
};

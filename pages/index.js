import React from "react";
import { Row } from "../components/Row";
import useRightClick from "../hooks/useRightClick";
import { files } from "../server/index";

export const RightClickContext = React.createContext(null);

export default function Home() {
  const rightClick = useRightClick();

  return (
    <>
      <RightClickContext.Provider value={rightClick}>
        <ul
          onClick={rightClick.hideContext}
          className="list-none pl-5 divide-slate-300 border-solid cursor-pointer w-1/4 border min-h-screen"
        >
          {files.map((item) => (
            <Row key={item.id} data={item} />
          ))}
        </ul>
      </RightClickContext.Provider>
    </>
  );
}

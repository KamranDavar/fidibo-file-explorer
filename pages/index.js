import React from "react";
import { Row } from "../components/Row";
import { useGetFiles } from "../logics/hooks/useGetFiles";
import useRightClick from "../logics/hooks/useRightClick";


export const RightClickContext = React.createContext(null);

export default function Home() {
  const rightClick = useRightClick();
  const {data,loading}= useGetFiles()


  return (
    <>
        <ul
          onClick={rightClick.hideContext}
          className="list-none pl-5 divide-slate-300 border-solid cursor-pointer w-1/4 border min-h-screen overflow-hidden" 
        >
          {data?.map((item) => (
            <Row key={item.id} data={item} />
          ))}
        </ul>
    </>
  );
}

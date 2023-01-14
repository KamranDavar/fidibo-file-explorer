import React, { useContext, useState } from "react";
import { RightClickContext } from "../pages";
import { AiOutlineRight } from "react-icons/ai";
import { AiFillFile } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { useGetFiles } from "../logics/hooks/useGetFiles";
import Form from "./Form";
import useRightClick from "../logics/hooks/useRightClick";
import { Icon } from "./Icon";

export const Row = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isNewFileDir, setIsNewFileDir] = useState();
  const { showNav, context, xYPosistion, isDirectory, hideContext } = useRightClick();
  // const { showNav, context, xYPosistion, isDirectory } =
  //   useContext(RightClickContext);
  const { data: rowData } = useGetFiles(data.id);

  return (
    <li>
      <div
        onClick={() => setOpen(!open)}
        onContextMenu={(e) => showNav(e, data.isDirectory)}
        className="flex items-center"
      >
        <span><Icon isDir={data.isDirectory} open={open} /> </span>

        {data.name}
      </div>

      {mode === "create" && showForm && (<div className="flex">
      <Icon isDir={isNewFileDir} />
        <Form mode={mode} name={data.name} setShowForm={setShowForm} />
      </div>
      )}
      <ul className="pl-5 ml-2 border-l divide-slate-300 border-solid">
        {data.isDirectory &&
          open &&
          rowData[0].files?.map((file) => <Row key={file.id} data={file} />)}
      </ul>
      {context && (
        <div
          style={{ top: xYPosistion.y, left: xYPosistion.x }}
          className="fixed bg-slate-100 p-2 divide-y divide-slate-200 divide-solid cursor-pointer"
        >
          {console.log("data", data)}
          {isDirectory && (
            <>
              <div
                className="hover:bg-slate-200"
                onClick={(e) => {
                  setShowForm(true);
                  setMode("create");
                  hideContext();
                  setIsNewFileDir(true)
                }}
              >
                New File
              </div>
              <div
                className="hover:bg-slate-200"
                onClick={(e) => {
                  setShowForm(true);
                  setMode("create");
                  hideContext();
                  setIsNewFileDir(false)
                }}
              >
                New Directory
              </div>
            </>
          )}
          <div className="hover:bg-slate-200">Rename</div>
          <div className="hover:bg-slate-200">Delete</div>
        </div>
      )}
    </li>
  );
};

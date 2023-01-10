import React, { useContext, useState } from 'react'
import { RightClickContext } from '../pages'
import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlineDown } from 'react-icons/ai'

export const Row = ({ data }) => {
  const [open, setOpen] = useState(false)
  const { showNav, context, xYPosistion, isDirectory } = useContext(
    RightClickContext,
  )

  const renderIcon = (isDir, open) => {
    return !isDir ? <></> : !open ? <AiOutlineRight /> : <AiOutlineDown />
  }

  return (
    <li>
      <div
        onClick={() => setOpen(!open)}
        onContextMenu={(e) => showNav(e, data.isDir)}
        className='flex items-center'
      >
        <span>{renderIcon(data.isDir, open)}</span>

        {data.name}
      </div>
      {data.isDir && open && (
        <ul className="pl-5 ml-2 border-l divide-slate-300 border-solid">
          {data.files?.map((file) => (
            <Row key={file.id} data={file} />
          ))}
        </ul>
      )}
      {context && (
        <div
          style={{ top: xYPosistion.y, left: xYPosistion.x }}
          className="fixed bg-slate-100 p-2 divide-y divide-slate-200 divide-solid cursor-pointer"
        >
          {isDirectory && (
            <>
              <div className="hover:bg-slate-200">New File</div>
              <div className="hover:bg-slate-200">New Directory</div>
            </>
          )}
          <div className="hover:bg-slate-200">Rename</div>
          <div className="hover:bg-slate-200">Delete</div>
        </div>
      )}
    </li>
  )
}

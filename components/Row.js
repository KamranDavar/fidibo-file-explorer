import React, { useContext, useState } from 'react'
import { RightClickContext } from '../pages'

export const Row = ({ data }) => {
  const [open, setOpen] = useState(false)
  const showNav = useContext(RightClickContext)

  return (
    <li>
      <div onClick={() => setOpen(!open)} onContextMenu={showNav}>
        {data.name}
      </div>
      <ul>
        {data.isDir &&
          open &&
          data.files.map((file) => <Row key={file.id} data={file} />)}
      </ul>
    </li>
  )
}

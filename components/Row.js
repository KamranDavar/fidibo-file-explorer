import React, { useState } from "react";

export const Row = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <div onClick={() => setOpen(!open)}>
        {data.name}
      </div>
      <ul>
        {data.isDir &&
          open &&
          data.files.map((file) => <Row key={file.id} data={file} />)}
      </ul>
    </li>
  );
};

import React from 'react'
import { Row } from '../components/Row'
import { files } from '../server/index'
export const RightClickContext = React.createContext(null)

export default function Home() {
  const [context, setContext] = React.useState(false)
  const [isDirectory, setisDirectory] = React.useState(null)
  const [xYPosistion, setXyPosistion] = React.useState({ x: 0, y: 0 })

  const showNav = (event, isDir) => {
    event.preventDefault()
    setContext(false)
    const positionChange = {
      x: event.pageX,
      y: event.pageY,
    }
    setXyPosistion(positionChange)
    setContext(true)
    setisDirectory(isDir)
  }

  const hideContext = () => {
    setContext(false)
  }

  return (
    <>
      <RightClickContext.Provider
        value={{ showNav, context, xYPosistion, isDirectory }}
      >
        <ul
          onClick={hideContext}
          className="list-none pl-5 divide-slate-300 border-solid"
        >
          {files.map((item) => (
            <Row key={item.id} data={item} />
          ))}
        </ul>
      </RightClickContext.Provider>
    </>
  )
}

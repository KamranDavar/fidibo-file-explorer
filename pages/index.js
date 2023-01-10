import React from 'react'
import { Row } from '../components/Row'
import { files } from '../server/index'
export const RightClickContext = React.createContext(null)
import styles from '../styles/Home.module.css'

export default function Home() {
  const [context, setContext] = React.useState(false)
  const [xYPosistion, setXyPosistion] = React.useState({ x: 0, y: 0 })
  const showNav = (event) => {
    event.preventDefault()
    setContext(false)
    const positionChange = {
      x: event.pageX,
      y: event.pageY,
    }
    setXyPosistion(positionChange)
    setContext(true)
  }
  const hideContext = (event) => {
    setContext(false)
  }

  return (
    <>
      <RightClickContext.Provider value={showNav}>
        <ul onClick={hideContext} className={styles.contextContainer}>
          {files.map((item) => (
            <Row key={item.id} data={item} />
          ))}
          {context && (
            <div style={{ top: xYPosistion.y, left: xYPosistion.x }}
            className={styles.rightClick}
            >
              <div className="menuElement">New File</div>
              <div className="menuElement">New Directory</div>
              <div className="menuElement">Rename</div>
              <div className="menuElement">Delete</div>
            </div>
          )}
        </ul>
      </RightClickContext.Provider>
    </>
  )
}

import React, {FC} from 'react'

const Section: FC = ({ children }) => {
  return (
    <div className="section">
      { children }
    </div>
  )
}

export default Section
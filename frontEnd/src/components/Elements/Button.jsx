import React from 'react'

export const Button = ({ onclick, classname, Text }) => {
  return (
    <button onClick={onclick} className={classname}>{Text}</button>
  )
}

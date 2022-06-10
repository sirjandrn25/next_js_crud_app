import React from 'react'

const Button = (props) => {
  const base_class = 'px-6 py-2 text-white  w-[80px] rounded-lg shadow-lg '
  return <button className={base_class + props.className}>{props.children}</button>
}

export default Button

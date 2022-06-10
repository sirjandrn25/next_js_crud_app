import React from 'react'
import Link from 'next/link'

const LinkButton = (props) => {
  const base_class = 'px-6 py-2 text-white  w-[80px] rounded-lg shadow-lg '
  return (
    <Link href={props.href}>
      <a className={base_class + props.className}>{props.children}</a>
    </Link>
  )
}

export default LinkButton

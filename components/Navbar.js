import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const curPathNameMatch = (curr_path, nav_label) => {
  return curr_path.startsWith(nav_label)
}

const Navbar = () => {
  const router = useRouter()
  let active_class = 'text-sky-400 border-b-[3px] border-b-cyan-300'
  let base_class = 'text-lg font-medium text-gray-600 hover:text-sky-400 mx-2 '
  const curr_pathname = router.pathname.substring(1)
  console.log()
  //   console.log(typeof curr_pathname)

  return (
    <nav className='w-screen p-5 fixed top-0 left-0 right-0 shadow'>
      <ul className='flex flex-row items-center'>
        <li className={base_class + (curr_pathname === '' ? active_class : '')}>
          <Link href='/'>
            <a className='px-4 py-2'>Home</a>
          </Link>
        </li>
        <li className={base_class + (curPathNameMatch(curr_pathname, 'users') ? active_class : '')}>
          <Link href='/users'>
            <a className='px-4 py-2'>Users</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

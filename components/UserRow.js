import React from 'react'

import Link from 'next/link'

const UserRow = (props) => {
  return (
    <tr className='border-b-2'>
      <td className=' py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap'>{props.fullName}</td>
      <td>{props.email}</td>
      <td>{props.roll}</td>
      <td>
        <Link href={`/users/edit/${props.user_id}`}>
          <a className='px-4 py-1 text-sm text-white bg-sky-400 w-[80px] rounded-lg shadow-lg hover:bg-sky-600'>Edit</a>
        </Link>
        <button
          onClick={(e) => props.onDelete(props.user_id)}
          className='px-4 py-1 ml-3 text-sm text-white bg-red-400 w-[80px] rounded-lg shadow-lg hover:bg-red-600'>
          delete
        </button>
      </td>
    </tr>
  )
}

export default UserRow

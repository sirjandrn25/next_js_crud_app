import React from 'react'
import Link from 'next/link'
import Button from '../../components/UI/Button'
import LinkButton from '../../components/UI/LinkButton'

const UserHome = () => {
  return (
    <div className='w-[1000px] flex flex-col p-5 border-2'>
      <h1 className='my-2 text-3xl font-bold border-b-4 py-3'>Users List</h1>

      <LinkButton href='/users/add' className='bg-green-400 hover:bg-green-600'>
        Add
      </LinkButton>

      <table className='w-full text-lg text-left text-gray-500 dark:text-gray-400 my-5'>
        <thead>
          <tr className='mb-2'>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b-2'>
            <td className=' py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap'>Sirjan Tamang</td>
            <td>sirjantmg99@gmail.com</td>
            <td>Admin</td>
            <td>
              <Link href='/users/add'>
                <a className='px-4 py-1 text-sm text-white bg-sky-400 w-[80px] rounded-lg shadow-lg hover:bg-sky-600'>
                  Edit
                </a>
              </Link>
              <button className='px-4 py-1 ml-3 text-sm text-white bg-red-400 w-[80px] rounded-lg shadow-lg hover:bg-red-600'>
                delete
              </button>
            </td>
          </tr>
          <tr className='border-b-2'>
            <td className=' py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap'>Sirjan Tamang</td>
            <td>sirjantmg99@gmail.com</td>
            <td>Admin</td>
            <td>
              <Link href='/users/add'>
                <a className='px-4 py-1 text-sm text-white bg-sky-400 w-[80px] rounded-lg shadow-lg hover:bg-sky-600'>
                  Edit
                </a>
              </Link>
              <button className='px-4 py-1 ml-3 text-sm text-white bg-red-400 w-[80px] rounded-lg shadow-lg hover:bg-red-600'>
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UserHome

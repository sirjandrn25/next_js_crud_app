import React, { useEffect, useState } from 'react'

import Button from '../../components/UI/Button'
import LinkButton from '../../components/UI/LinkButton'
import UserRow from '../../components/UserRow'
import axios from 'axios'

const users_api = '/api/users'

const UserHome = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios
      .get(users_api)
      .then((resp) => {
        setUsers(resp.data.users)
      })
      .catch((error) => {
        console.log(error)
      })
    // fetchUsers()
  }, [])

  const deleteHandler = (user_id) => {
    axios({
      url: `${users_api}/${user_id}`,
      method: 'delete',
    })
      .then((resp) => {
        setUsers((prevState) => {
          return prevState.filter((user) => user_id !== user.id)
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

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
          {users.map((user) => {
            return (
              <UserRow
                onDelete={deleteHandler}
                fullName={user.fname + ' ' + user.lname}
                email={user.email}
                roll={user.roll}
                key={user.id}
                user_id={user.id}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserHome

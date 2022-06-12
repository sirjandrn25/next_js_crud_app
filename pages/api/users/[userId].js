import users_list from '../../../data/users'

export default function handler(req, res) {
  const { userId } = req.query
  let existUser = users_list.find((user) => +userId === user.id)
  if (!existUser) {
    return res.status(404).json({ result: 'not found' })
  } else {
    const index = users_list.findIndex((user) => +userId === user.id)

    switch (req.method) {
      case 'GET':
        return res.status(200).json(existUser)

      case 'DELETE':
        users_list.splice(index, 1)
        return res.status(204).end()
      case 'PUT':
        let update_data = {
          ...existUser,
          ...req.body,
          id: +userId,
        }
        users_list[index] = update_data

        return res.status(200).json(update_data)
      default:
        return res.status(200).json(existUser)
    }
  }
  //   console.log(existUser)
}

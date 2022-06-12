import users_list from '../../../data/users'

export default function handler(req, res) {
  console.log(req.method)
  if (req.method === 'GET') {
    res.status(200).json({ users: users_list })
  }
  if (req.method === 'POST') {
    const new_user = req.body
    users_list.push(req.body)
    return res.status(201).json({ ...new_user })
  }
}

import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@rays.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Shivaji A Chalise',
    email: 'respond2shivaji@gmail.com',
    password: bcrypt.hashSync('R@Y5M0T0R5', 10),
    isAdmin: true,
  },
  {
    name: 'Jane Doe',
    email: 'jane@rays.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users

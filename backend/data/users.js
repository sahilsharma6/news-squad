// import bcrypt from 'bcryptjs';  

// const users = [
//   {
//     name: 'Admin User',
//     email: 'admin@email.com',
//     password: bcrypt.hashSync('123456', 10),
//     isAdmin: true,
//   },
//   {
//     name: 'John Doe',
//     email: 'john@email.com',
//     password: bcrypt.hashSync('123456', 10),
//   },
//   {
//     name: 'Jane Doe',
//     email: 'jane@email.com',
//     password: bcrypt.hashSync('123456', 10),
//   },
// ];

// export default users;
import bcrypt from 'bcryptjs';  

const users = [
  {
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;


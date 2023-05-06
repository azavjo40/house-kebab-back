// if mongodb 
// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         uri: env('DATABASE_URI'),
//       },
//       options: {
//         ssl: true,
//       },
//     },
//   },
// });

//ifpostgres Database
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        url: env('DATABASE_URL'),
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {},
    },
  },
});




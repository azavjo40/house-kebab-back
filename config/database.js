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
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', undefined),
        password: env('DATABASE_PASSWORD', undefined),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
})


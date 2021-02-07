/*
	In Production, also set: (It is a must!!!)
	NODE_ENV: production
*/

module.exports = {
	jwtTimeout: process.env.JWT_TIMEOUT,
	jwtPrivateKey: process.env.JWT_PRIVATE_KEY,
	postgresDB: process.env.POSTGRES_DATABASE,
	postgresUser: process.env.POSTGRES_DATABASE_USER,
	postgresPassword: process.env.POSTGRES_DATABASE_PASSWORD,
	postgresURL: process.env.POSTGRES_DATABASE_URL,
}

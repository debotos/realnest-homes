/*
	In Production, also set: (It is a must!!!)
	NODE_ENV: production
*/

module.exports = {
	jwtTimeout: process.env.JWT_TIMEOUT,
	jwtPrivateKey: process.env.JWT_PRIVATE_KEY,
	postgresDB: process.env.POSTGRES_DATABASE, // Dev env required
	postgresUser: process.env.POSTGRES_DATABASE_USER, // Dev env required
	postgresPassword: process.env.POSTGRES_DATABASE_PASSWORD, // Dev env required
	postgresURL: process.env.POSTGRES_DATABASE_URL, // Dev env NOT required, Only Prod
}

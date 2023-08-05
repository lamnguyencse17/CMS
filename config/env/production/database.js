module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'postgres.caprover.lamnguyencse17.dev'),
			port: env.int('DATABASE_PORT', 5433),
			database: env('DATABASE_NAME', 'strapi'),
			user: env('DATABASE_USERNAME', 'postgres'),
			password: env('DATABASE_PASSWORD', 'b5e2ed1efaaeb57e'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});

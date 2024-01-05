import { DataSource } from 'typeorm';

export const databaseProvider = [
	{
		provide: 'DATA_SOURCE',
		useFactory: async () => {
			const dataSource = new DataSource({
				type: 'postgres',
				host: 'localhost',
				port: 5432,
				username: 'root',
				password: 'root',
				database: 'test',
				entities: [__dirname + '/../**/*.entity{.ts,.js}'],
				synchronize: true,
			});

			return dataSource.initialize();
		},
	},
];

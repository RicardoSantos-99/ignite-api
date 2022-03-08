import express, { Request, Response } from 'express';
import 'express-async-errors';
import Winston from '@shared/utils/winston';
import AppError from '@shared/errors/AppError';

import { categoriesRoutes } from './routes/categories.routes';

const logger = new Winston();
const app = express();
app.use(express.json());

app.use('/categories', categoriesRoutes);

app.use((error: Error, _: Request, response: Response) => {
	if (error instanceof AppError) {
		return response.status(error.statusCode).json({
			status: 'error',
			message: error.message,
		});
	}

	return response.status(500).json({
		status: 'error',
		message: 'Internal server error',
	});
});

app.listen(3333, () => {
	logger.info('Server started on port 3333');
});

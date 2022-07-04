import { createCategoryController } from '@cars/useCases/createCategory';
import { Router } from 'express';

const categoriesRoutes = Router();

categoriesRoutes.post('/', createCategoryController.handle);

// categoriesRoutes.get('/', (req, res) => {
// 	const categories = categoriesRepository.list();

// 	return res.json(categories);
// });

export { categoriesRoutes };

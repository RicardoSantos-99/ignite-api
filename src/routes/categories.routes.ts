import { createCategoryController } from '@cars/useCases/createCategory';
import { listCategoriesController } from '@cars/useCases/listCategories';
import { Router } from 'express';

const categoriesRoutes = Router();

categoriesRoutes.post('/', createCategoryController.handle);
categoriesRoutes.get('/', listCategoriesController.handle);

export { categoriesRoutes };

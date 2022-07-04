
import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoryUseCase';

class ListCategoriesController {
	constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }

	handle(req: Request, res: Response) {
		const categories = this.listCategoriesUseCase.execute()

		return res.json(categories);
	}
}

export { ListCategoriesController };

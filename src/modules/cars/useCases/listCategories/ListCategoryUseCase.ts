import { Category } from '@cars/model/Category';
import { ICategoriesRepository } from '@cars/repositories/ICategoriesRepository';

class ListCategoriesUseCase {
	constructor(private categoriesRepository: ICategoriesRepository) { }
	public async execute(): Promise<Category[]> {
		return this.categoriesRepository.list();
	}
}

export { ListCategoriesUseCase };

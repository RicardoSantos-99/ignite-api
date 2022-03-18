import { CategoriesRepository } from 'src/repositories/CategoriesRepository';

interface IRequest {
	name: string;
	description: string;
}

class CreateCategoryService {
	constructor(private categoriesRepository: CategoriesRepository) {}
	public async execute({ name, description }: IRequest): Promise<void> {
		const categoryAlreadyExists =
			this.categoriesRepository.findByName(name);

		if (categoryAlreadyExists) {
			throw new Error('Category already exists');
		}

		this.categoriesRepository.create({ name, description });
	}
}

export { CreateCategoryService };

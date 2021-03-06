import { ICategoriesRepository } from '@cars/repositories/ICategoriesRepository';

interface IRequest {
	name: string;
	description: string;
}

class CreateCategoryUseCase {
	constructor(private categoriesRepository: ICategoriesRepository) { }
	public async execute({ name, description }: IRequest): Promise<void> {
		const categoryAlreadyExists =
			this.categoriesRepository.findByName(name);

		if (categoryAlreadyExists) {
			throw new Error('Category already exists');
		}

		this.categoriesRepository.create({ name, description });
	}
}

export { CreateCategoryUseCase };

import { Category } from '@cars/model/Category';
import {
	ICreateCategoryDTO,
	ICategoriesRepository,
} from '@cars/repositories/ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
	private categories: Category[] = [];

	constructor() {
		this.categories = [];
	}

	create({ description, name }: ICreateCategoryDTO): void {
		const category = new Category();

		Object.assign(category, {
			name,
			description,
			created_at: new Date(),
		});

		this.categories.push(category);
	}

	list(): Category[] {
		return this.categories;
	}

	findByName(name: string): Category | undefined {
		return this.categories.find(category => category.name === name);
	}
}

export { CategoriesRepository };

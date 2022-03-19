import { Category } from '../model/Category';
import {
	ICreateCategoryDTO,
	ICategoriesRepository,
} from './ICategoriesRepository';

class CategoriesRepository2 implements ICategoriesRepository {
	findByName(name: string): Category | undefined {
		throw new Error('Method not implemented.');
	}
	list(): Category[] {
		throw new Error('Method not implemented.');
	}
	create({ name, description }: ICreateCategoryDTO): void {
		throw new Error('Method not implemented.');
	}
}

export { CategoriesRepository2 };

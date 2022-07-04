import { Specification } from '@cars/model/Specification';
import { ISpecificationDTO, ISpecificationRepository } from './ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
	private specifications: Specification[];

	constructor() {
		this.specifications = [];
	}

	create({ description, name }: ISpecificationDTO): void {
		const specification = new Specification();

		Object.assign(specification, {
			name,
			description,
			created_at: new Date(),
		});
		this.specifications.push(specification);
	}

	findByName(name: string): Specification | undefined {
		return this.specifications.find(specification => specification.name === name);
	}

}

export { SpecificationRepository };

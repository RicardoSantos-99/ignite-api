import { Specification } from "@cars/model/Specification";

interface ISpecificationDTO {
	name: string;
	description: string;
}


interface ISpecificationRepository {
	create({ description, name }: ISpecificationDTO): void
	findByName(name: string): Specification | undefined
}


export { ISpecificationRepository, ISpecificationDTO };

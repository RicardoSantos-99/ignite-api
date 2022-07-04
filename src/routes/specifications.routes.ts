import { SpecificationRepository } from '@cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '@cars/services/CreateSpecificationService';
import { Router } from 'express';

const specificationsRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationsRoutes.post('/', (req, res) => {
	const { name, description } = req.body;

	const createSpecification = new CreateSpecificationService(specificationRepository);

	createSpecification.execute({ name, description });

	return res.status(201).send();
});


export { specificationsRoutes };

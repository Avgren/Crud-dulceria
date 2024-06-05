import { Router } from "express";
import { CategoryController } from "./controller";
import { CategoryService } from "../../services/category.service";

export class CategoryRoute{
   static get route(): Router{
        const routes = Router();
        const categoryServices = new CategoryService();
        const controller = new CategoryController(categoryServices)
        routes.get('/:id', controller.findOne);
        routes.put('/:id', controller.update);
        routes.delete('/:id', controller.delete);
        routes.post('/', controller.create)
        return routes;
    }
}
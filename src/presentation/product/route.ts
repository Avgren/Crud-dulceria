import { Router } from "express";
import { ProductController } from "./controller";
import { ProductService } from "../../services/product.service";

export class ProductRoute{
   static get route(): Router{
        const routes = Router();
        const productServices = new ProductService();
        const controller = new ProductController(productServices) 
        routes.get('/:id', controller.findOne);
        routes.put('/:id', controller.update);
        routes.delete('/:id', controller.delete);
        routes.post('/', controller.create)
        return routes;
    }
}
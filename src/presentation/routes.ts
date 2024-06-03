import { Router } from "express";
import { ProductRoute } from "./product/route";
import { CategoryRoute } from "./category/route";

export class AppRoute{
   static get route(): Router{
        const routes = Router();
        routes.use('/api/product', ProductRoute.route)
        routes.use('/api/category', CategoryRoute.route)
        return routes;
    }
}
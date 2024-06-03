import { Request, Response } from "express";
import { CategoryService } from "../../services/category.service";
import { CreateCategoryDto } from "../../domain/dtos/category/create-category.dto";
import { UpdateCategoryDto } from "../../domain/dtos/category/update-category.dto";
import { Validators } from "../../config/validator";
import { HandleError } from "../../domain/errors/handle.error";


export class CategoryController{
    constructor(private readonly categoryServices:CategoryService, ){}
    
    create = (req:Request, res:Response) => {
        const [error, createCategory] = CreateCategoryDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.categoryServices.create(createCategory!)
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res))
    };

    update = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        const [error, updateCategoryDto] = UpdateCategoryDto.update(req.body)
        if(error) return res.status(400).json({error})
        this.categoryServices.update(updateCategoryDto!, id!)
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res))
    }

    delete = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        this.categoryServices.delete(id!)
        .then(user => res.json(user))
        .catch(error => HandleError.error(error, res))
    }

    findOne = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        this.categoryServices.findOne(id!)
        .then(category => res.json(category))
        .catch(error => HandleError.error(error, res))  
    }


}

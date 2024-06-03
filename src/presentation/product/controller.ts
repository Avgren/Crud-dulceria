import { Request, Response } from "express";
import { ProductService } from "../../services/product.service";
import { Validators } from "../../config/validator";
import { HandleError } from "../../domain/errors/handle.error";
import { CreateProductDto } from "../../domain/dtos/product/create-product.dto";
import { UpdateProductDto } from "../../domain/dtos/product/update-product.dto";


export class ProductController{
    constructor(private readonly productServices:ProductService, ){}
    
    create = (req:Request, res:Response) => {
        const [error, createProductDto] = CreateProductDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.productServices.create(createProductDto!)
        .then(product => res.json(product))
        .catch(error => HandleError.error(error, res))
    };

    update = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        const [error, updateProductDto] = UpdateProductDto.update(req.body)
        if(error) return res.status(400).json({error})
        this.productServices.update(updateProductDto!, id!)
        .then(product => res.json(product))
        .catch(error => HandleError.error(error, res))
    }

    delete = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        this.productServices.delete(id!)
        .then(product => res.json(product))
        .catch(error => HandleError.error(error, res))
    }

    findOne = (req:Request, res:Response) => {
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        this.productServices.findOne(id!)
        .then(product => res.json(product))
        .catch(error => HandleError.error(error, res))  
    }

}

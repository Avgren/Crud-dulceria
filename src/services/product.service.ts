import { ProductModel } from "../data/mogodb/models/product.model";
import { CreateProductDto } from "../domain/dtos/product/create-product.dto";
import { UpdateProductDto } from "../domain/dtos/product/update-product.dto";
import { ProductEntity } from "../domain/entities/product.entity";
import { CustomError } from "../domain/errors/custom.error";
import { ProductMaper } from "../domain/mapers/product.mapers";

export class ProductService{
    async create (createProductDto:CreateProductDto):Promise<ProductEntity>{
        try {

            const product = await ProductModel.create(createProductDto);
            if(!product) throw CustomError.badRequest("create product failed")
            await product.save();
            return ProductMaper.fromEntity(product);
            
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer(); 
        }
    }

    async update(updateProductDto:UpdateProductDto, id:string):Promise<ProductEntity>{
        try {
            const product = await ProductModel.findByIdAndUpdate(id, {...updateProductDto});
            if(!product) throw CustomError.badRequest("update product failed")
            await product.save();
            return ProductMaper.fromEntity(product);

        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer(); 
        }
    }

    async delete(_id:string):Promise<ProductEntity>{
        try {
            const product = await ProductModel.findOneAndDelete({_id});
            if(!product) throw CustomError.badRequest("product don't exist")
            return ProductMaper.fromEntity(product);

        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer(); 
        }
    }

    async findOne(_id:string):Promise<ProductEntity>{
        try {
            const product = await ProductModel.findOne({_id});
            if(!product) throw CustomError.badRequest("product don't exist")
            return ProductMaper.fromEntity(product);
      
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer(); 
        }
    }

}
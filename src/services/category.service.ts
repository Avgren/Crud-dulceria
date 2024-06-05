import { CartegoryEntity } from "../domain/entities/category.entity";
import { categoryMaper } from "../domain/mapers/category.mapers";
import { CreateCategoryDto } from "../domain/dtos/category/create-category.dto";
import { UpdateCategoryDto } from "../domain/dtos/category/update-category.dto";
import { CustomError } from "../domain/errors/custom.error";
import { CategoryModel } from "../data/mogodb/models/category.model";

export class CategoryService{
    async create (createCategoryDto:CreateCategoryDto):Promise<CartegoryEntity>{
        const {name} = createCategoryDto;
        try {

            const exist = await CategoryModel.findOne({name});
            if(exist) throw Error('Error');
            const category = await CategoryModel.create(createCategoryDto);
            if(!category) throw CustomError.badRequest("create category  failed")
            await category.save();
            return categoryMaper.fromEntity(category);
            
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async update(updateCategoryDto:UpdateCategoryDto, id:string):Promise<CartegoryEntity>{
        try {
            const category = await CategoryModel.findByIdAndUpdate(id, {...updateCategoryDto});
            if(!category) throw CustomError.badRequest("update category  failed")
            await category.save();
            return categoryMaper.fromEntity(category);

        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

    async delete(_id:string):Promise<CartegoryEntity>{
        try {
            const category = await CategoryModel.findOneAndDelete({_id});
            if(!category) throw CustomError.badRequest("category don't exist")
            return categoryMaper.fromEntity(category);

        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer(); 
        }
    }

    async findOne(_id:string):Promise<CartegoryEntity>{
        try {
            const category = await CategoryModel.findOne({_id});
            if(!category) throw CustomError.badRequest("category don't exist")
            return categoryMaper.fromEntity(category);
      
        } catch (error) {
            if( error instanceof CustomError ) throw error;
            throw CustomError.internalServer();
        }
    }

}
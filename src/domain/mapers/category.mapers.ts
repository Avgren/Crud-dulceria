import { CartegoryEntity } from "../entities/category.entity"

export class categoryMaper{
    static fromEntity(Object:{[key:string]:any}):CartegoryEntity{
        const {id, name, description} = Object
        if(!name) throw Error('name is required')
        return new CartegoryEntity(id,name,description)
    }
}
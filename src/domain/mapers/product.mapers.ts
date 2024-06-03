import { ProductEntity } from "../entities/product.entity"


export class ProductMaper{
    static fromEntity(Object:{[key:string]:any}):ProductEntity{
        const {id,name, price, category,description} = Object
        if(!name) throw Error('name is required')
        if(!price) throw Error('price is required')
        if(!category) throw Error('category is required')
        return new ProductEntity(id,name, price, category,description)
    }
}
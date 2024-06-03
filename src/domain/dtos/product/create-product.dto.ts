export class CreateProductDto{
    constructor(
        public name:string,
        public price: number,
        public category: string,
        public img?: string,
        public description?:string
    ){}

    static create(object:{[key:string]:any}):[string?, CreateProductDto?]{
        const {name, price, category, img, description} = object
        if(!name) return['name is required', undefined]
        if(!price) return['price is required', undefined]
        if(!category) return['category is required', undefined]
        return [undefined, new CreateProductDto(name, price, category, img, description)]
    }
}
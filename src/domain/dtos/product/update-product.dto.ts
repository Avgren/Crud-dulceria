export class UpdateProductDto{
    constructor(
        public id: string,
        public name:string,
        public price: number,
        public category: string,
        public img?: string,
        public description?:string
    ){}

    static update(object:{[key:string]:any}):[string?, UpdateProductDto?]{
        const {id, name, price, category, img, description} = object
        if(!price) return['price is required', undefined]
        if(!category) return['category is required', undefined]
        return [undefined, new UpdateProductDto(id, name, price, category, img, description)]
    }
}
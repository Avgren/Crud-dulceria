export class UpdateCategoryDto{
    constructor(
        public id: string,
        public name?:string,
        public description?:string
    ){}

    static update(object:{[key:string]:any}):[string?, UpdateCategoryDto?]{
        const {id, name, description} = object
        return [undefined, new UpdateCategoryDto(id, name, description)]
    }
}
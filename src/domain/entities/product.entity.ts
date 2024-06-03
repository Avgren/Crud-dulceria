export class ProductEntity{

    constructor(
        public id: string,
        public name:string,
        public price: number,
        public category:string,
        public description?:string
    ){}

}
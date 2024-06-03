import mongoose from "mongoose"


export class Validators{
    static validationMongoId(id:string){
        const validator = mongoose.Types.ObjectId.isValid(id)
        if(validator) return true
    }
}
import mongoose from "mongoose";
import { envs } from '../../config/envs';

export class mongoDB {
    static async connection(){
        try {
            await mongoose.connect( envs.MONGO_URL , {dbName:envs.MONGO_DB_NAME} )

            console.log('mongo connection');
            return true;

        } catch (error) {
            console.log(error);
            throw Error(`${error}`)
        }
    }
}

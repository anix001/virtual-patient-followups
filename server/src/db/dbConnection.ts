import mongoose from 'mongoose';
import {config, Logger} from '../utils/index.js'

const DbConnection = async() => {

    try {
        await mongoose.connect(config.databaseUrl);
        console.log('Db Connected');
        Logger.info('Db Connected');
    } catch (error) {
        console.error("Error initializing database:", error);
        Logger.error(error as string);
        process.exit(1);
    }
 
};

export default DbConnection;

 
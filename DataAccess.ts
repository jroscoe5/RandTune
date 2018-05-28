import Mongoose = require("mongoose");

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;
    static DB_CONNECTION_STRING:string = 'mongodb://admin:randtuneadmin@ds016298.mlab.com:16298/randtune';
    
    constructor () {
        DataAccess.mongooseConnect();
    }
    
    static mongooseConnect (): Mongoose.Connection {
        // if already connected return connection
        if(this.mongooseInstance) return this.mongooseInstance;
        
        this.mongooseConnection  = Mongoose.connection;
        this.mongooseConnection.on("open", () => {
            console.log("Connected to mongodb.");
        });
        
        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }
    
}
DataAccess.mongooseConnect();
export {DataAccess};
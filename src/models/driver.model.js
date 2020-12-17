const query = require('../db/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');
class DriverModel {


    find = async (params = {}) => {
        let sql = `call processorders();`;

        if (!Object.keys(params).length) {
            return await query(sql);
        }

    
        return await query(sql);
    }

  
}

module.exports = new DriverModel;
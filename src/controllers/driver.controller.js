const DriverModel = require('../models/driver.model.js');
const HttpException = require('../utils/HttpException.utils.js');
const dotenv = require('dotenv');
dotenv.config();


class DriverController {
    getAllOrders = async(req, res, next) => {
        let orderList = await DriverModel.find();
        let convertedDriverList = [];
        if (!orderList.length) {
            throw new HttpException(404, 'Orders not found');
        }

        orderList.pop();
        res.send(orderList);
    };
}


module.exports = new DriverController;
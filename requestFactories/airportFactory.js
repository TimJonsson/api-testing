const { request } = require("../config");

class AirportFactory {

     async getAirports() {
        const response = await request.get("/airports");

        return response
    }
}

module.exports = AirportFactory;
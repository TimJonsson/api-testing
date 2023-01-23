const { request } = require("../config")

class AirportFactory {

     async getAirports() {
        const response = await request.get("/airports")

        return response
    }

    async getAirport(airport) {
        const response = await request.get(`/airports/${airport}`)
        console.log("Respone: ${response}")
        return response
    }
}

module.exports = AirportFactory
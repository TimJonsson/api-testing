const { expect, request } = require("../config")
const AirportFactory = require("../requestFactories/AirportFactory.js")

const airportFactory = new AirportFactory()

describe("GET /airports", function () {
  it("returns all airports, limited to 30 per page", async function () { 
    let response = await airportFactory.getAirports();

    expect(response.status).to.eql(200)
    expect(response.body.data.length).to.eql(30)
  });
});

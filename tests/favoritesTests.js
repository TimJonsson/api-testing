const { request, expect } = require("../config");

describe("GET /airports", function () {
  it("returns all airports, limited to 30 per page", async function () {
    const response = await request.get("/airports");

    expect(response.status).to.eql(200);
    expect(response.body.data.length).to.eql(30);
  });
});

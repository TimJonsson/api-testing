const { request, expect } = require("../config");
const FavoritesFactory = require("../requestFactories/FavoritesFactory.js");

const favoritesFactory = new FavoritesFactory()

describe("POST /favorites", function () {
  it("requires authentication", async function () {
    let response = await favoritesFactory.postFavoriteWithoutAuth();

    expect(response.status).to.eql(401);
  });
});

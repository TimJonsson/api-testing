const { request, expect } = require("../config")
const FavoritesFactory = require("../requestFactories/FavoritesFactory.js")

const favoritesFactory = new FavoritesFactory()

describe("POST /favorites", function () {
  it("Favorites endpoint requires authentication and returns 401", async function () {
    let response = await favoritesFactory.postFavoriteAirportIdWithoutAuth()

    expect(response.status).to.eql(401)
  })

  it("Add and deletes a favorit airport", async function () {
    let response = await favoritesFactory.postFavoriteAirport("JFK", "My usual layover when visiting family")

    expect(response.status).to.eql(201)

    favoritesId = response.body.data.id
    console.log(favoritesId)
    deleteResponse = await favoritesFactory.deleteFavoriteId(favoritesId)
    expect (response.status).to.eql(201)
  })
})

const { response } = require("express");
const { request } = require("../config");

class FavoritesFactory {

    async postFavoriteAirportIdWithoutAuth() {
        const response = await request.post("/favorites")
            .send({
                airport_id: "JFK",
                note: "My usual layover when visiting family",
            });
        return response
    }

    async postFavoriteAirport() {
        const response = await request.post("/favorites")
            .set("Authorization", `Bearer token=${process.env.AIRPORT_GAP_TOKEN}`)
            .send({
                airport_id: "JFK",
                note: "My usual layover when visiting family",

            });
        return response
    }

    async deleteFavoriteId(id) {
        const response = await request
        .delete(`/favorites/${id}`)
        .set("Authorization", `Bearer token=${process.env.AIRPORT_GAP_TOKEN}`);
        
        return response
    }
}

module.exports = FavoritesFactory;

const { request } = require("../config");

class FavoritesFactory {

    async postFavoriteWithoutAuth() {
        const response = await request.post("/favorites").send({
            airport_id: "JFK",
            note: "My usual layover when visiting family",
        });
        return response
    }
}

module.exports = FavoritesFactory;
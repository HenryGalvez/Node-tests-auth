const dao = require("../dbo/dao")

module.exports = {

    getTasks: async (req, res, next) => {
        res.json([
            {
                _id: 1,
                name: 'Public Task one',
                description: 'lorem ipsum',
                date: '2020-08-17T20:39:42.160Z'
            },
            {
                _id: 2,
                name: 'Public Task two',
                description: 'lorem ipsum',
                date: '2020-08-17T20:39:42.160Z'
            },
            {
                _id: 3,
                name: 'Public Task three',
                description: 'lorem ipsum',
                date: '2020-08-17T20:39:42.160Z'
            }
        ])
    }
};
const dao = require("../dbo/dao")

module.exports = {

    getTasks: async (req, res) => {
        res.json([
            {
                _id: 1,
                name: 'Private Task one',
                description: 'lorem ipsum',
                date: '2020-08-17T20:39:42.160Z'
            },
            {
                _id: 2,
                name: 'Private Task two',
                description: 'lorem ipsum',
                date: '2020-08-17T20:39:42.160Z'
            },
            {
                _id: 3,
                name: 'Private Task three',
                description: 'lorem ipsum',
                date: '2020-08-17T20:39:42.160Z'
            }
        ])
    }
};
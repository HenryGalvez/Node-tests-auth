const dao = require("../dbo/dao")
const jwt = require('jsonwebtoken')

module.exports = {

    insert: async (req, res, next) => {
        const { email, password } = req.body
        dao.query("insert into user(email,password) values('" + email + "', '" + password + "')", (err, rows, fields) => {
            if (!err) {
                const token = jwt.sign({ email: email }, 'secretkey')
                res.json({ Status: 200, message: "User created successfully!!", token: token });
            } else {
                console.log(err);
                res.json({ Status: 400, message: err });
            }
        });
    },
    getUser: async (req, res, next) => {
        const { email, password } = req.body
        dao.query("select * from user where email = '" + email + "'", (err, rows, fields) => {
            if (!err) {
                if (rows[0].email !== email) return res.status(400).send("this email does not exists")
                if (rows[0].password !== password) return res.status(401).send('Wrong password')
                const token = jwt.sign({ email: email }, 'secretkey')
                res.json({ Status: 200, message: "User created successfully!!" , token: token});
            } else {
                console.log(err);
                res.json({ Status: 400, message: err });
            }
        });
    }
};
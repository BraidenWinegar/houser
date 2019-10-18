
module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db');
        db.get_houses().then(houses => {
            res.status(200).send(houses)
        })
        .catch(err => console.log(err))
    },

    addHouse: (req, res) =>{
        const {name, address, city, state, zip} = req.body;
        const db = req.app.get('db');
        db.post_user(name, address, city, state, zip).then(users =>{
            res.status(200).send(users)
        })
        .catch(err => res.status(500).send(err))
    }
}
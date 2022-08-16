const houses = require('./db.json');
const houseID = 4;

module.exports = {
    getHouses: (res,req) => {
        res.status(200).send(houses);
    },
    deleteHouse: (res,req) =>{
        const id = Numer(req.params.id);
        const index = houses.findIndex(elem => elem.id === id);
        houses.splice(index, 1);
        res.status(200).send(houses);
    },
    createHouse: (res,req) =>{
        let { id, address, price, imageURL} = req.body;
        const newHouse = {
            id: houseID,
            address,
            price,
            imageURL
        };
        houses.push(newHouse);
        res.status(200).send(houses);
        houseID++;
    },
    updateHouse: (res,req) => { 
        let {id} = req.params;
        let {type} = req.body;
        let index = houses.findIndex(elem => +elem.id === +id);

        if (house[index].price <= 10000 && type === 'minus'){
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus') {
                houses[index].price += 10000
                res.status(200).send(houses)
        } else if (type === 'minus') {
                houses[index].price -= 10000
                res.status(200).send(houses)
        } else {
                res.sendStatus(400)
        }
    },

}





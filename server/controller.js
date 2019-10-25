module.exports = {
  getHouses: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_houses()
      .then(houses => res.status(200).send(houses))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oopsy Daisy - try again!" });
        console.log(err);
      });
  },
  createHouse: (req, res) => {
    const dbInstance = req.app.get("db");
    const {
      propertyName,
      propertyAddress,
      propertyCity,
      propertyState,
      propertyZip,
      propertyImageUrl,
      propertyMortgage,
      propertyRent
    } = req.body;

    dbInstance
      .create_house([
        propertyName,
        propertyAddress,
        propertyCity,
        propertyState,
        propertyZip,
        propertyImageUrl,
        propertyMortgage,
        propertyRent
      ])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errormessage: "Oops" });
        console.log(err);
      });
  },
  deleteHouse: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    console.log(id);

    dbInstance
      .delete_house(id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Didn't work" });
        console.log(err);
      });
  }
};

const Chef = require('../models/chefModel');

const createChef = async (req, res) => {
    try {
        const newChef = new Chef(req.body);
        await newChef.save();
        res.status(201).json(newChef);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createChef
};

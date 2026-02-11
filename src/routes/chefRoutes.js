const express = require('express');
const router = express.Router();
const Chef = require('../models/chefModel');  

// GET all chefs
router.get('/', async (req, res) => {
    try {
        const chefs = await Chef.find();
        res.json(chefs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST create a new chef
router.post('/', async (req, res) => {
    try {
        // Add logging to debug
        console.log('Request body:', req.body);
        
        const chef = new Chef({
            name: req.body.name,
            specialty: req.body.specialty
        });

        const newChef = await chef.save();
        res.status(201).json(newChef);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET single chef
router.get('/:id', async (req, res) => {
    try {
        const chef = await Chef.findById(req.params.id);
        if (!chef) {
            return res.status(404).json({ message: 'Chef not found' });
        }
        res.json(chef);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();

const { protect, authorize } = require('../middleware/authMiddleware');

const {
  getAllDishes,
  createDish,
  getDishById,
  updateDish,
  deleteDish,    
} = require('../controllers/dishController');

router.get('/', getAllDishes);
router.post('/', protect, authorize('admin', 'manager'), createDish);

router.get('/dishes', getAllDishes);
router.post('/dishes', createDish);
router.get('/dishes/:id', getDishById);
router.put('/dishes/:id', updateDish);
router.delete('/dishes/:id', deleteDish);

module.exports = router;
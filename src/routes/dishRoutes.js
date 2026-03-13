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
router.get('/:id', getDishById);

router.post('/', protect, authorize('admin', 'manager'), createDish);
router.put('/:id', protect, authorize('admin', 'manager'), updateDish);
router.delete('/:id', protect, authorize('admin', 'manager'), deleteDish);

module.exports = router;
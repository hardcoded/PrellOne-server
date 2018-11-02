// Route for Accessing Board Data via Restful API

const router = require('express').Router()
const auth = require('../middlewares/authMiddleware').isAuthenticated
const asyncWrapper = require('../middlewares/asyncWrapper')
const BoardController = require('../controllers/boardController')

/* GET ALL BOARDS */
router.get('/', /* auth, */ asyncWrapper( async(req, res, next) => {
    const boards = await BoardController.getAll()
    res.type('application/json')
    res.status(200)
    res.json(boards)
}))

/* GET SINGLE BOARD BY ID */
router.get('/:id', /* auth, */ asyncWrapper( async(req, res, next) => {
    const board = await BoardController.getById(req.params.id)
    res.type('application/json')
    res.status(200)
    res.json(board)
}))

router.post('/', /* auth, */ asyncWrapper( async(req, res, next) => {
    const newBoard = req.body
    const board = await BoardController.create(newBoard)
    res.type('application/json')
    res.status(200)
    res.json(board)
}))

module.exports = router;
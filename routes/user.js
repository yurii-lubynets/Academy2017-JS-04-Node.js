const router = require('express').Router();
const userService = require('../services/user');

router.post('/add', function (req, res) {
	const newUser = {
		id: req.body.id,
		name: req.body.name,
		email: req.body.email
	};
	userService.addUser(newUser);
	res.json(res.data);
});

router.get('/', (req, res, next) => {
	userService.findAll((err, data) => {
		if (!err) {
			res.data = data;
			res.json(res.data);
		} else {
			res.status(400);
			res.end();
		}
	});
});

router.put('/update/:id', (req, res) => {
	const updatedUser = req.body;
	userService.findUpdate(Number(req.body.id), updatedUser);
	res.json(res.data);
});

router.delete('/delete/:id', (req, res) => {
	userService.findDelete(Number(req.body.id));
	res.json(res.data);
});

module.exports = router;
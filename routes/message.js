const router = require('express').Router();
const messageService = require('../services/history');

router.post('/add', function (req, res) {
	const newMessage = {
		id: req.body.id,
		senderId: req.body.senderId,
		receiverId: req.body.receiverId,
		value: req.body.value
	};
	messageService.addMessage(newMessage);
	res.json(res.data);
});

router.get('/', (req, res) => {
	messageService.findAll((err, data) => {
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
	const updatedMessage = req.body;
	messageService.findUpdate(Number(req.body.id), updatedMessage);
	res.json(res.data);
});

router.delete('/delete/:id', (req, res) => {
	messageService.findDelete(Number(req.body.id));
	res.json(res.data);
});

module.exports = router;
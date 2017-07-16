const messages = [
	{
		id: 0,
		senderId: 0,
		receiverId: 1,
		value: "lorem Ipsum"
	},
	{
		id: 1,
		senderId: 1,
		receiverId: 2,
		value: "lorem Ipsum"
	},
	{
		id: 2,
		senderId: 3,
		receiverId: 0,
		value: "lorem Ipsum"
	}
];

function findMessage(id) {
  	let error = null;
  	let index = null;
  	if (typeof id === 'undefined') {
    	error = new Error('undefined message`s id');
  	}
	const message = messages.find((el, ind) => {
	    return el.id === id ? index = ind: false;
  	});
  	return {message, index, error};
}

module.exports = {
  	findAll: (callback) => {
    	callback(null, messages);
  	},
  	addMessage: (message) => {
    	if (typeof message.id !== 'undefined') {
      		messages.push(message);
    	} else {
      		const error = new Error('undefined id');
    	}
  	},
  	findDelete: (id) => {
    	let messageId = findMessage(id);
    	if (typeof messageId !== 'undefined') {
      		messages.splice(messageId, 1);
    	} else {
      		err = new Error('undefined id');
    	}
  	},
  	findUpdate: (id, message) => {
		const index = findMessage(id);
		console.log(index);
		messages[index.index] = Object.assign(messages[index.index], message);
  	}
};

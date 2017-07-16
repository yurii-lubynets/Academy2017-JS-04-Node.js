const users = [
	{
		id: 0,
		name: 'Adam',
		email: "example@gmail.com"
  	},
  	{
		id: 1,
		name: 'Dan',
		email: "example@gmail.com"
  	},
  	{
		id: 2,
		name: 'Gregor',
		email: "example@gmail.com"
  	}
];

function findUser(id) {
	let error = null;
	if (typeof id === 'undefined') {
		error = new Error('undefined user`s id');
	}
	let index = null;
	const user = users.find((el, indx) => {
		if (el.id === id){
			index = indx;
			return true;
		} else {
			return false;
		}
	});
	return {user, index, error};
}

module.exports = {
	findAll: (callback) => {
		callback(null, users);
	},
	addUser:(user) => {
		if (typeof user.id !== 'undefined') {
		users.push(user);
		} else {
			const error = new Error('undefined user`s id');
		}
	},
	findDelete: (id) => {
		let userId = findUser(id);
		if (typeof userId !== 'undefined') {
			users.splice(userId, 1);
		} else {
			error = new Error('undefined user`s id');
		}
	},
	findUpdate: (id, user) => {
		const index = findUser(id);
		users[index.index] = Object.assign(users[index.index], user);
	}
};


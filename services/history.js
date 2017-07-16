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

function findReceivers(id){
	if (typeof id === 'undefined'){
    	return null;
  	}
  	return  messages.filter( message => {
    	return message.senderId === id;
  	});
}
module.exports = {
  	findReceivers
};

import Request from '../utils/request'
function newMessage(payload) {
	return Request('/message/new', {
		method: 'POST',
		data: payload
	})
}
function getMyMsg(payload) {
	return Request('/message/my', {
		method: 'POST',
		data: payload
	})
}


export { newMessage, getMyMsg }
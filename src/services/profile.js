import Request from '../utils/request'
function queryList(payload) {
	return Request('/profile/', {
		method: 'POST',
		data: payload
	})
}
function updateProfile(payload) {
	return Request('/profile/', {
		method: 'PUT',
		data: payload
	})
}
export { queryList,updateProfile }
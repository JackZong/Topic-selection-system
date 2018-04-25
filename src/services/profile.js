import Request from '../utils/request'
function queryList(payload) {
	return Request('/profile/', {
		method: 'POST',
		data: payload
	})
}
export { queryList }
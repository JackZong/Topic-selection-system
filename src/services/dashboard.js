import Request from '../utils/request'
function queryList(payload) {
	return Request('/dashboard', {
		method: 'GET',
		data: payload
	})
}
export { queryList }
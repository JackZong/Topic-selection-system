import Request from '../utils/request'
function queryList(payload) {
	return Request('/student/list', {
		method: 'GET',
		data: payload
	})
}
export { queryList }
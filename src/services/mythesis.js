import Request from '../utils/request'
function queryList(payload) {
	return Request('/preselection/list', {
		method: 'POST',
		data: payload
	})
}
export { queryList }
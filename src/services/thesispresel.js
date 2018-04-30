import Request from '../utils/request'
function queryList(payload) {
	return Request('/preselection/list', {
		method: 'POST',
		data: payload
	})
}
function updatePre(payload) {
	return Request('/preselection/update',{
		method: 'PUT',
		data: payload
	})
}
function updateCheck(payload) {
	return Request('/preselection/updatecheck',{
		method: 'post',
		data: payload
	})
}
export { queryList, updatePre, updateCheck }
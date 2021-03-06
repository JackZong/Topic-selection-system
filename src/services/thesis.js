import Request from '../utils/request'
const list = (payload) => {
  return Request('/thesis/list',{
  	method: 'GET',
  	data: payload
  })
}
const selectThesis = (payload) => {
	return Request('/preselection/add', {
		method: 'PUT',
		data: payload
	})
}
export { list, selectThesis }
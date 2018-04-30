import Request from '../utils/request'
const addThesis = (payload) => {
	console.log(payload)
  return Request('/thesis/add', {
  	method: 'PUT',
  	data: payload
  })
}
const queryList = (payload) => {
  return Request('/thesisapply/list', {
  	method: 'POST',
  	data: payload
  })
}
const updateThesis = (payload) => {
	return Request('/thesis/update', {
		method: 'PUT',
		data: payload
	})
}
export { addThesis, queryList, updateThesis }
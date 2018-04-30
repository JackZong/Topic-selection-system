import Request from '../utils/request'
const list = (payload) => {
  return Request('/thesischeck/',{
  	method: 'GET',
  	data: payload
  })
}
const check = (payload) => {
	return Request('/thesischeck/', {
		method: 'PUT',
		data: payload
	})
}
export { list, check }
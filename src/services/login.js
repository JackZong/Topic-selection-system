import Request from '../utils/request'
function login(options){
	return Request('/users/login',{
		method: 'POST',
		data: options
	})
}
export { login }
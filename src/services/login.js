import Request from '../utils/request'
function login(options){
	return Request('/api/user/login',{
		method: 'GET',
		data: options
	})
}
export { login }
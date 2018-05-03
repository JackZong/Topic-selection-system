import Request from '../utils/request'
const queryList = (payload) => {
  return Request('/teacher/list',{
  	method: 'POST',
  	data: payload
  })
}
export { queryList }
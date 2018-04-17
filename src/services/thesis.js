import Request from '../utils/request'
const list = () => {
  return Request('/thesis/list',{
  	method: 'GET'
  })
}
export { list }
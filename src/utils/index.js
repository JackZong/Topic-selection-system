function setCookie(name,value,expires){
  let expiresTime
  if (typeof expires !== 'number' && expires) {
  	throw Error('expires must be a number or null')
  }
  if (expires) {
  	expiresTime = new Date(Date.now() + expires * 24 * 60 * 60 * 1000).toGMTString()
  }
  document.cookie = name + '=' + escape(value) + (expiresTime ? ';expires=' + expiresTime : '') 
}
function getCookies() {
  let cookies = document.cookie.replace(/\s/g,'')
  let cookiesArr = cookies.split(';')
  let obj = {}
  cookiesArr.forEach((item,index,arr) => {
  	let temp = item.split('=')
  	obj[temp[0]] = temp[1]
  })
  return obj
}
function genTableData(order,list){

}
export {
	setCookie,
	getCookies,
  genTableData
}
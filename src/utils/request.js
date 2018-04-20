const request = function(url, options){
	console.log(options)
	return new Promise(function(resolve,reject){
	 	var xhr = new XMLHttpRequest()
	 	xhr.onreadystatechange = function(){
	 	  if(xhr.readyState !== 4) {
	 	  	return
	 	  }
	 	  if(xhr.status === 200) {
	          resolve(JSON.parse(xhr.response))
	 		} else {
	 		  reject(new Error(xhr.statusText))
	 		}
	 	}
	 	if(options.method === 'GET') {
	 		xhr.open(options.method, API + url + location.search, true)
	 	} else {
	 		xhr.open(options.method, API + url+'?page=1', true)
	 	}
	 	xhr.setRequestHeader('Content-Type','application/json;charset=utf-8')
	 	xhr.send(JSON.stringify(options.data))
	})
}
export default request
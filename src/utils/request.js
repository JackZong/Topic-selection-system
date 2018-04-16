const request = function(url, options){
	var xhr = new XMLHttpRequest()
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200) {
         console.log(xhr.response)
         return xhr.response
		}
	}
	xhr.responseType = "json"
	xhr.open(method, url, true)
	xhr.send()
}
export default request
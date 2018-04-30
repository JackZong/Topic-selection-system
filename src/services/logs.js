import Request from '../utils/request'
function queryList(payload) {
	return Request('/logs/list', {
		method: 'POST',
		data: payload
	})
}

// TAOBAO IP 
function queryIpAddr(payload) {
	return Request(`http://ip.taobao.com/service/getIpInfo.php?ip=${payload.ip}`, {
		method: 'GET'
	},true)
}
export { queryList, queryIpAddr }
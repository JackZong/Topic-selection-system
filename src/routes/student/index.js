import React from 'react'
import { connect } from 'dva'
const StudentList = () => {
	return (
      <h1>这里是学生列表</h1>
	)
}
export default connect()(StudentList)
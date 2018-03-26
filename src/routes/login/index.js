import React from 'react'
const Login = ({ loading, dispatch }) => {
	console.log(';')
	return (
      <div>
       <h1>LOGIN PAGE</h1>
      </div>
    )
}
export default connect(({ loading }) => ({ loading }))(Form.create()(Login))
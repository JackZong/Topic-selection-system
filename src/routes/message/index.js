import React from 'react'
import { connect } from 'dva'
import {
  TextField
} from 'material-ui'
import { getCookies } from '../../utils'
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText,FormGroup } from 'material-ui/Form';
class Message extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: getCookies().username,
      toUserType: '0',
      toName: '',
      toNo: '',
      content: ''
    }
  }
  handleRadioChange = (e,value) =>{
    this.setState({
      toUserType: value
    })
  }
  setValue = (e,type) => {
    console.log(type)
    this.setState({
      [type]: e.target.value
    })
  }
  submit = (e) => {
    e.preventDefault()
    this.props.dispatch({
      type: 'message/newMessage',
      payload: {
        msg_sender_id: this.state.username,
        msg_receiver_name: this.state.toName,
        msg_receiver_id: this.state.toNo,
        msg_content: this.state.content
      }
    })
  }
  render(){
    const { username, toUserType } = this.state
  	return (
      <form>
        <TextField 
          id="name"
          label="发送人编号"
          margin="normal"
          value={username}
          disabled
          type="input"
        />
        <FormGroup row={true}>
          <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">针对用户</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={toUserType}
                onChange={(e,value) => this.handleRadioChange(e,value)}
              >
                <FormControlLabel value="0" control={<Radio />} label="单个用户" />
                <FormControlLabel value="1" control={<Radio />} label="所有学生" />
                <FormControlLabel value="2" control={<Radio />} label="所有导师" />
                <FormControlLabel value="3" control={<Radio />} label="系统所有用户" />
              </RadioGroup>
            </FormControl>
        </FormGroup>
            <TextField 
              id="name"
              label="收件人编号"
              margin="normal"
              type="input"
              disabled={toUserType == '0' ? false : true}
              onChange={(e) => this.setValue(e,'toNo')}
            />
            <br/>
            <TextField 
              id="name"
              label="收件人姓名"
              margin="normal"
              type="input"
              disabled={toUserType == '0' ? false : true}
              onChange={(e) => this.setValue(e,'toName')}
            />
            <br/>
            <TextField 
              id="name"
              label="消息内容"
              margin="normal"
              multiline
              rowsMax="4"
              onChange={(e) => this.setValue(e,'content')}
            />
            <br/>
            <button onClick={this.submit}>发送</button>
      </form>
  	)
  }
}
function mapStateToProps({ message }){
  return { message }
}
export default connect(mapStateToProps)(Message)

import React from 'react'
import { connect } from 'dva'
import bg from 'PUBLIC/assets/img/login.jpg'
class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     
    }
  }
  formSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch({
      type: 'login/checklogin',
      payload: {
        username: this.refs.username.value,
        password: this.refs.password.value
      }
    })
  }
  render(){
      return (
          <div class="wrapper wrapper-full-page">
              <nav class="navbar navbar-primary navbar-transparent navbar-fixed-top">
                  <div class="container">
                      <div class="navbar-header">
                          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu-example">
                              <span class="sr-only">Toggle navigation</span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                          </button>
                          <a class="navbar-brand" href="/#/dashboard">论文选题系统</a>
                      </div>
                      <div class="collapse navbar-collapse" id="menu-example">
                          <ul class="nav navbar-nav navbar-right">
                              <li>
                                  <a routerLink='/dashboard'>
                                      <i class="material-icons">dashboard</i> 系统后台
                                  </a>
                              </li>
                             {/* <li class="">
                                  <a href="/pages/register">
                                      <i class="material-icons">person_add</i> Register
                                  </a>
                              </li>*/}
                              <li class=" active ">
                                  <a href="/pages/login">
                                      <i class="material-icons">fingerprint</i> 登录页
                                  </a>
                              </li>
                            {/*  <li class="">
                                                              <a href="/pages/lock">
                                                                  <i class="material-icons">lock_open</i> Lock
                                                              </a>
                                                          </li>*/}
                          </ul>
                      </div>
                  </div>
              </nav>
              <div class="full-page login-page" filter-color="black">
                  {/*<!--   you can change the color of the filter page using: data-color="blue | purple | green | orange | red | rose " -->*/}
                  <div class="content">
                      <div class="container">
                          <div class="row">
                              <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                                  <form ref="form">
                                      <div class="card card-login">
                                          <div class="card-header text-center" data-background-color="rose">
                                              <h4 class="card-title">用户登录</h4>
                                            {/*  <div class="social-line" >
                                                  <a href="#btn" class="btn btn-just-icon btn-simple">
                                                      <i class="fa fa-facebook-square"></i>
                                                  </a>
                                                  <a href="#pablo" class="btn btn-just-icon btn-simple">
                                                      <i class="fa fa-twitter"></i>
                                                  </a>
                                                  <a href="#eugen" class="btn btn-just-icon btn-simple">
                                                      <i class="fa fa-google-plus"></i>
                                                  </a>
                                              </div>*/}
                                          </div>
                                       {/*<p class="category text-center">
                                              Or Be Classical
                                          </p>*/}
                                          <div class="card-content">
                                              <div class="input-group">
                                                  <span class="input-group-addon">
                                                      <i class="material-icons">face</i>
                                                  </span>
                                                  <div class="form-group label-floating">
                                                      <label class="control-label">用户名</label>
                                                      <input type="text" class="form-control" formControlName="username" ref="username" />
                                                  </div>
                                              </div>
                                              <div class="input-group">
                                                  <span class="input-group-addon">
                                                      <i class="material-icons">lock_outline</i>
                                                  </span>
                                                  <div class="form-group label-floating">
                                                      <label class="control-label">密码</label>
                                                      <input type="password" class="form-control" formControlName="password" ref="password" />
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="footer text-center">
                                              <button type="submit" class="btn btn-rose btn-simple btn-wd btn-lg" onClick={this.formSubmit}>登录</button>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
                  <footer class="footer">
                      <div class="container">
                          <nav class="pull-left">
                              <ul>
                                  <li>
                                      <a href="http://www.jxnu.edu.cn/">
                                          师大主页
                                      </a>
                                  </li>
                                  <li>
                                      <a href="http://jwc.jxnu.edu.cn/">
                                         教务在线
                                      </a>
                                  </li>
                                  <li>
                                      <a href="http://tsg.jxnu.edu.cn/">
                                          图书馆
                                      </a>
                                  </li>
                                  <li>
                                      <a href="http://www.cnki.net/">
                                          知网
                                      </a>
                                  </li>
                              </ul>
                          </nav>
                          <p class="copyright pull-right">
                              &copy;
                              {new Date(Date.now()).getFullYear()}
                              <a href="https://www.creative-tim.com"> JXNU</a>, made with love for a better web
                          </p>
                      </div>
                  </footer>
                <div class="full-page-background" style={{backgroundImage: "url("+bg+")"}}/>
              </div>
          </div>
        )
  }
}
export default connect()(Login)
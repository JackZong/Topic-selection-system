import React from 'react'
import { connect } from 'dva'
import { Table, RegularCard } from 'components/'
import { routerRedux } from 'dva/router'
import qs from 'query-string'
import {
  AccountBox
} from 'material-ui-icons'
const Profile = ({location,dispatch,profile}) => {
	const { list } = profile
	return (
      <div class="content">
          <div class="container-fluid">
              <div class="row">
                  <div class="col-md-10">
                      <div class="card">
                          <div class="card-header card-header-icon" data-background-color="rose">
                              <i class="material-icons">perm_identity</i>
                          </div>
                          <div class="card-content">
                              <h4 class="card-title">Edit Profile -
                                  <small class="category">Complete your profile</small>
                              </h4>
                              <form action="http://127.0.0.1:3000/api/profile" method="PUT" >
                                  <div class="row">
                                      <div class="col-md-5">
                                          <div class="form-group label-floating">
                                              <label class="control-label">No (disabled)</label>
                                              <input type="text" class="form-control" value={list.st_id} disabled />
                                          </div>
                                      </div>
                                      <div class="col-md-3">
                                          <div class="form-group label-floating">
                                              <label class="control-label">Name</label>
                                              <input type="text" value={list.st_name} class="form-control" />
                                          </div>
                                      </div>
                                      <div class="col-md-4">
                                          <div class="form-group label-floating">
                                              <label class="control-label">Email address</label>
                                              <input type="email" class="form-control" value={list.st_email}/>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-md-6">
                                          <div class="form-group label-floating">
                                              <label class="control-label">Class Name</label>
                                              <input type="text" class="form-control" value={list.st_class} disabled/>
                                          </div>
                                      </div>
                                      <div class="col-md-6">
                                          <div class="form-group label-floating">
                                              <label class="control-label">Major</label>
                                              <input type="text" class="form-control" disabled/>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-md-4">
                                          <div class="form-group label-floating">
                                              <label class="control-label">Telephone</label>
                                              <input type="text" class="form-control" value={list.st_telephone}/>
                                          </div>
                                      </div>
                                      <div class="col-md-4">
                                          <div class="form-group label-floating">
                                              <label class="control-label">QQ</label>
                                              <input type="text" class="form-control" value={list.st_qq}/>
                                          </div>
                                      </div>
                                      <div class="col-md-4">
                                          <div class="form-group label-floating">
                                              <label class="control-label">Sex</label>
                                              <input type="text" class="form-control" value={list.st_sex}/>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-md-12">
                                          <div class="form-group">
                                              <label>About Me</label>
                                              <div class="form-group label-floating">
                                                  <label class="control-label"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>
                                                  <textarea class="form-control" rows="5" value={list.st_introduce}></textarea>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <button type="submit" class="btn btn-rose pull-right">Update Profile</button>
                                  <div class="clearfix"></div>
                              </form>
                          </div>
                      </div>
                  </div>
                  {/*<div class="col-md-4">
                      <div class="card card-profile">
                          <div class="card-avatar">
                              <a href="#pablo">
                                  <img class="img" src="../../assets/img/faces/marc.jpg" />
                              </a>
                          </div>
                          <div class="card-content">
                              <h6 class="category text-gray">CEO / Co-Founder</h6>
                              <h4 class="card-title">Alec Thompson</h4>
                              <p class="description">
                                  Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                              </p>
                              <a href="#pablo" class="btn btn-rose btn-round">Follow</a>
                          </div>
                      </div>
                  </div>*/}
              </div>
          </div>
      </div>
	)
}
function mapStateToProps({ profile }) {
	return { profile }
}
export default connect(mapStateToProps)(Profile)
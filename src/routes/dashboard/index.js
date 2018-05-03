import React from 'react'
import { connect } from 'dva'
import {
  ContentCopy,
  Store,
  InfoOutline,
  Warning,
  DateRange,
  LocalOffer,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility
} from "material-ui-icons";
import { Grid } from "material-ui";
import Style from './dashboard.less'
import ItemGrid from 'components/Grid/ItemGrid'
import NProgress from 'nprogress'
import { now } from '../../utils/'
const Dashboard = ({dashboard}) => {
  const { list } = dashboard
  return (
  	<div className="content">
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                    <div className="card-header" data-background-color="orange">
                        <i className="material-icons">weekend</i>
                    </div>
                    <div className="card-content">
                        <p className="category">论文题目</p>
                        <h3 className="card-title">602</h3>
                    </div>
                    <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons text-danger">warning</i>
                            <a href="#pablo">仅计算 2018 届</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                    <div className="card-header" data-background-color="rose">
                        <i className="material-icons">equalizer</i>
                    </div>
                    <div className="card-content">
                        <p className="category">访问者</p>
                        <h3 className="card-title">null</h3>
                    </div>
                    <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons">local_offer</i> 来自百度统计
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                    <div className="card-header" data-background-color="green">
                        <i className="material-icons">person</i>
                    </div>
                    <div className="card-content">
                        <p className="category">用户</p>
                        <h3 className="card-title">745</h3>
                    </div>
                    <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons">date_range</i> 截止 {now()}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                    <div className="card-header" data-background-color="blue">
                        <i className="fa fa-twitter"></i>
                    </div>
                    <div className="card-content">
                        <p className="category">学生选题率</p>
                        <h3 className="card-title">98%</h3>
                    </div>
                    <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons">update</i> 刚刚更新
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header card-header-icon" data-background-color="green">
                            <i className="material-icons">language</i>
                        </div>
                        <div className="card-content">
                            <h4 className="card-title">10 大热门选题</h4>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="table-responsive table-sales">
                                        <table className="table">
                                            <tbody>
                                            <tr>
                                                <td className="text-center">
                                                    状态（人）
                                                </td>
                                                <td className="text-center">编号</td>
                                                <td className="text-center">
                                                   题目
                                                </td>
                                                <td className="text-center">
                                                   导师
                                                </td>
                                            </tr>
                                            {list.map((item,index,arr) => {
                                              return (
                                                <tr>
                                                    <td className="text-center">
                                                        {item.th_state}
                                                    </td>
                                                    <td className="text-center">{item.th_id}</td>
                                                    <td className="text-center">
                                                        {item.th_name}
                                                    </td>
                                                    <td className="text-center">
                                                       {item.mt_name}
                                                    </td>
                                                </tr>
                                              )
                                            })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-6 col-md-offset-1">
                                    <div id="worldMap" className="map"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           {/* <div className="row">
                <div className="col-md-4">
                    <div className="card card-chart">
                        <div className="card-header" data-background-color="rose" data-header-animation="true">
                            <div className="ct-chart" id="websiteViewsChart"></div>
                        </div>
                        <div className="card-content">
                            <div className="card-actions">
                                <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                    <i className="material-icons">build</i> Fix Header!
                                </button>
                                <button type="button" className="btn btn-info btn-simple" rel="tooltip" data-placement="bottom" title="Refresh">
                                    <i className="material-icons">refresh</i>
                                </button>
                                <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="Change Date">
                                    <i className="material-icons">edit</i>
                                </button>
                            </div>
                            <h4 className="card-title">Website Views</h4>
                            <p className="category">Last Campaign Performance</p>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                <i className="material-icons">access_time</i> campaign sent 2 days ago
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-chart">
                        <div className="card-header" data-background-color="green" data-header-animation="true">
                            <div className="ct-chart" id="dailySalesChart"></div>
                        </div>
                        <div className="card-content">
                            <div className="card-actions">
                                <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                    <i className="material-icons">build</i> Fix Header!
                                </button>
                                <button type="button" className="btn btn-info btn-simple" rel="tooltip" data-placement="bottom" title="Refresh">
                                    <i className="material-icons">refresh</i>
                                </button>
                                <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="Change Date">
                                    <i className="material-icons">edit</i>
                                </button>
                            </div>
                            <h4 className="card-title">Daily Sales</h4>
                            <p className="category">
                                <span className="text-success"><i className="fa fa-long-arrow-up"></i> 55% </span> increase in today sales.</p>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                <i className="material-icons">access_time</i> updated 4 minutes ago
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-chart">
                        <div className="card-header" data-background-color="blue" data-header-animation="true">
                            <div className="ct-chart" id="completedTasksChart"></div>
                        </div>
                        <div className="card-content">
                            <div className="card-actions">
                                <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                    <i className="material-icons">build</i> Fix Header!
                                </button>
                                <button type="button" className="btn btn-info btn-simple" rel="tooltip" data-placement="bottom" title="Refresh">
                                    <i className="material-icons">refresh</i>
                                </button>
                                <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="Change Date">
                                    <i className="material-icons">edit</i>
                                </button>
                            </div>
                            <h4 className="card-title">Completed Tasks</h4>
                            <p className="category">Last Campaign Performance</p>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                <i className="material-icons">access_time</i> campaign sent 2 days ago
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}
       {/*     <h3>Manage Listings</h3>
            <br/>
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-product">
                        <div className="card-image" data-header-animation="true">
                            <a href="#pablo">
                                <img className="img" src="../assets/img/card-2.jpg" />
                            </a>
                        </div>
                        <div className="card-content">
                            <div className="card-actions">
                                <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                    <i className="material-icons">build</i> Fix Header!
                                </button>
                                <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="View">
                                    <i className="material-icons">art_track</i>
                                </button>
                                <button type="button" className="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title="Edit">
                                    <i className="material-icons">edit</i>
                                </button>
                                <button type="button" className="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title="Remove">
                                    <i className="material-icons">close</i>
                                </button>
                            </div>
                            <h4 className="card-title">
                                <a href="#pablo">Cozy 5 Stars Apartment</a>
                            </h4>
                            <div className="card-description">
                                The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="price">
                                <h4>$899/night</h4>
                            </div>
                            <div className="stats pull-right">
                                <p className="category"><i className="material-icons">place</i> Barcelona, Spain</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-product">
                        <div className="card-image" data-header-animation="true">
                            <a href="#pablo">
                                <img className="img" src="../assets/img/card-3.jpg" />
                            </a>
                        </div>
                        <div className="card-content">
                            <div className="card-actions">
                                <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                    <i className="material-icons">build</i> Fix Header!
                                </button>
                                <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="View">
                                    <i className="material-icons">art_track</i>
                                </button>
                                <button type="button" className="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title="Edit">
                                    <i className="material-icons">edit</i>
                                </button>
                                <button type="button" className="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title="Remove">
                                    <i className="material-icons">close</i>
                                </button>
                            </div>
                            <h4 className="card-title">
                                <a href="#pablo">Office Studio</a>
                            </h4>
                            <div className="card-description">
                                The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="price">
                                <h4>$1.119/night</h4>
                            </div>
                            <div className="stats pull-right">
                                <p className="category"><i className="material-icons">place</i> London, UK</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-product">
                        <div className="card-image" data-header-animation="true">
                            <a href="#pablo">
                                <img className="img" src="../assets/img/card-1.jpg" />
                            </a>
                        </div>
                        <div className="card-content">
                            <div className="card-actions">
                                <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                    <i className="material-icons">build</i> Fix Header!
                                </button>
                                <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="View">
                                    <i className="material-icons">art_track</i>
                                </button>
                                <button type="button" className="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title="Edit">
                                    <i className="material-icons">edit</i>
                                </button>
                                <button type="button" className="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title="Remove">
                                    <i className="material-icons">close</i>
                                </button>
                            </div>
                            <h4 className="card-title">
                                <a href="#pablo">Beautiful Castle</a>
                            </h4>
                            <div className="card-description">
                                The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="price">
                                <h4>$459 night</h4>
                            </div>
                            <div className="stats pull-right">
                                <p className="category"><i className="material-icons">place</i> Milan, Italy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}
        </div>
    </div>
  )
}
function mapStateToProps({dashboard}) {
    return { dashboard }
}
export default connect(mapStateToProps)(Dashboard)
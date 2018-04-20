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
const Dashboard = () => {
  return (
  	<div>
     <Grid container>
       <ItemGrid xs={12} sm={6} md={3}>
        这里是首页
        这里是首页
        这里是首页
        这里是首页
        这里是首页
        这里是首页
        这里是首页
        这里是首页
       </ItemGrid>
     </Grid>
  	</div>
   
  )
}
export default connect()(Dashboard)
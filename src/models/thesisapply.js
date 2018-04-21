import { addThesis, queryList, updateThesis } from '../services/thesisapply'
import Swal from 'sweetalert2'
import { getCookies } from '../utils/'
export default {
  namespace: 'thesisapply',
  state: {
    list: [],
    page: {
      page: 1,
      count: 0,
      page_limit: 20
    },
    record: null,
    editModal: false,
    modalShow: false
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if(location.pathname === '/thesisapply'){
          dispatch({
            type: 'queryList',
            payload: {
              ...location.query,
              username: getCookies().username
            }
          })
        }
      })
    }
  },
  effects: {
    *addThesis({ payload }, { call, put, select }) {
      let res = yield call(addThesis,payload)
      if(res.code === 1) {
        yield put({
          type: 'hideModal'
        })
        yield put({
          type: 'queryList',
          payload: {
            username: payload.th_mt_id
          }
        })
        Swal({
          title: "Success !",
          type: 'success',
          timer: 2000,
          showConfirmButton: false
        })
      }
    },
    *queryList({ payload }, { call, put, select }) {
      let res = yield call(queryList,payload)
      if(res.code === 1) {
        yield put({
          type: 'queryListSuccess',
          payload: {
            list: res.data
          }
        })
      }
  },
  *updateThesis({ payload }, { call,put, select}) {
    let res = yield call(updateThesis,payload)
    if(res.code === 1) {
      yield put({
        type: 'editModalHide'
      })
      yield put({
        type: 'queryList',
        payload: {
          username: getCookies().username
        }
      })
      Swal({
        title: 'Update Success!',
        showConfirmButton: false,
        timer: 2000,
        type: 'success'
      })
    }
  }
},
  reducers: {
    hideModal(state){
      return {
        ...state,
        modalShow: false
      }
    },
    showModal(state){
      return {
        ...state,
        modalShow: true
      }
    },
    queryListSuccess(state,action){
      console.log(action)
      const { list } = action.payload
      return {
        ...state,
        list
      }
    },
    editModalShow(state,action) {
      return {
        ...state,
        editModal: true,
        record: action.payload
      }
    },
    editModalHide(state,action) {
      return {
        ...state,
        editModal: false
      }
    }
  }
}
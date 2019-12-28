import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/actions";

function App(props) {
  console.log(props);
  return (
    <div className=''>
      <p>{props.users}</p>
      <button onClick={()=>props.updateUser('Jane')}>Dispatch Test</button>

    </div>

  );
}
//subscribe: store의 state를 =>나의 props로 매핑
//부모=>자식통신
const mapStateToMpas= (state) =>({
  //왼쪽이 props, 오른쪽이 store의 state
  products: state.products,
  users: state.users
})
//자식=>부모통신: 펑션을 props로 전달
//action dispatch: 액션을 디스패치하는 펑션을 props로 맵핑
const mapActionToProps= (dispatch) => ({
  //왼쪽은 props, 오른쪽은 action을 dispatch하는 펑션
  updateUser:(name)=> dispatch(updateUser(name))
});

//커링 펑션, HoC컴포넌트
export default connect(mapStateToMpas,{updateUser})(App);


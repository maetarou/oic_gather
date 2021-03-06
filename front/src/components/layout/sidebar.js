import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const url = document.location.hostname == 'localhost' ?
            'http://localhost:3000/user' :
            'https://gathergram.herokuapp.com/user'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleCLick.bind(this)
    this.fetchUser()
  }

  handleCLick() {
    this.props.dispatch({
      type: 'CLICK_SIDEBAR'
    })
  }

  fetchUser() {
    fetch(url)
      .then((response) => {
        response.json().then((res) => {
          this.props.dispatch({
            type: 'GET_USER',
            value: res
          })
        })
      })
  }

  render() {
    return(
      <div>
        {
          this.props.state.Header.sidebarFlg ?
          <SidebarMenu user={this.props.state.Sidebar.user} handleClick={this.handleClick} /> :
          null
        }
      </div>
    )
  }
}

const SidebarMenu = (props) => {
  return(
    <div className='sidebar'>
      <div className='sidebar__menu' onClick={props.handleClick}>
        <div className='sidebar__menu__in'>
          <div className='sidebar__menu__in__header'>
            <div className='sidebar__menu__in__header__name'>{props.user.name}</div>
          </div>

          <ul className='sidebar__menu__in__contents'>
            <li>
              <Link to='/'>トップ</Link>
            </li>
            <li>
              <Link to='/ranking'>ランキング</Link>
            </li>
            <li>
              <Link to='/gather/history'>履歴</Link>
            </li>
            <li>
              <Link to='/privacy_policy'>プライバシーポリシー</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='p-sidebar__menu__out'></div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {state: {Sidebar: state.Sidebar, Header: state.Header}}
}

export default connect(mapStateToProps)(Sidebar)

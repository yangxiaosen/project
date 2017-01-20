/**
 * Created by luqianyu on 2017/1/2.
 */
import { connect } from 'react-redux'

// actions
import { login, signOut } from '../modules/Header-module'

// components
import Header from '../components/Header-user'

const mapDispatchToProps = {
  login: (user) => login(user),
  signOut: () => signOut()
}

const mapStateToProps = (state) => ({
  isLogin: state.header.isLogin,
  user:    state.header.userName
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

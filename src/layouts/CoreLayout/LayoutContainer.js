/**
 * Created by luqianyu on 2017/1/3.
 */
import { connect } from 'react-redux'
import { login, signOut } from '../../components/Header/modules/Header-module'
import Layout from './CleanLayout'

function mapStateToProps (state) {
  return {
    isLogin: state.header.isLogin,
    user: state.header.user
  }
}

const mapDispatchToProps = {
  login: (user) => login(user),
  signOut: () => signOut()
}

const CoreLayout = connect(mapStateToProps, mapDispatchToProps)(Layout)

export default CoreLayout

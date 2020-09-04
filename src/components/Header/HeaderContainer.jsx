import { connect } from 'react-redux';
import Header from './Header.jsx';
import { logOutUsers, isLogin } from '../../redux/LogPage-reducer';






const mapStateToProps = (state) => {

    return {
        //propsUser: state.LogPage.user,
        user: state.LogPage.user,
        errorStatus: state.RequestsStatus.errorStatus
    }
}


const mapDispatchToProps = (dispatch) => {
    return {

        checkUser: () => {
            dispatch(isLogin());
        },
        logOutUser: () => {
            dispatch(logOutUsers());
        }

    }

}


const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
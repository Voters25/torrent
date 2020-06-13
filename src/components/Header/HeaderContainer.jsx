import { connect } from 'react-redux';
import Header from './Header.jsx';





const mapStateToProps = (state) => {
    return {
        propsUser: state.LogPage.user
    }
}


const mapDispatchToProps = (dispatch) => {
    return {


    }

}


const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
import { connect } from 'react-redux';
import NavBar from './NavBar.jsx';





const mapStateToProps = (state) => {
    return {
        user: state.LogPage.user
    }
}


const mapDispatchToProps = (dispatch) => {
    return {


    }

}


const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;
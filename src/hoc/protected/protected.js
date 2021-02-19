import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Protected = ({ user, children }) => {
    const history = useHistory();
    if (user["_id"]) {
        return children;
    } else {
        history.push("/logged-out");
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, null)(Protected);
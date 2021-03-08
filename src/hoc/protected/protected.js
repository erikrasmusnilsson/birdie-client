import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Protected = ({ user, children }) => {
    const history = useHistory();
    useEffect(() => {
        if (!user["_id"]) {
            history.push("/");
        }
    }, []);

    return user["_id"] ? children : null;
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, null)(Protected);
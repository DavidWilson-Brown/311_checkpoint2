import { connect } from 'react-redux';
import Entry from '../components/Entry/Entry';
import { deleteEntry } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    scripts: state.scripts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEntry: (index) => dispatch(deleteEntry(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Entry);
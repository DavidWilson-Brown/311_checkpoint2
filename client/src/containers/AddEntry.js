import { connect } from 'react-redux';
import AddEntry from '../components/AddEntry/AddEntry';
import { addEntry, deleteEntry } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    scripts: state.scripts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addEntry: (entry) => dispatch(addEntry(entry)),
    deleteEntry: (index) => dispatch(deleteEntry(index))
  }
}



export default connect (mapStateToProps, mapDispatchToProps)(AddEntry);
import { connect } from 'react-redux';
import TextCard from '../components/TextCard/TextCard';

const mapStateToProps = (state) => {
  return {
    scripts: state.scripts
  }
}

export default connect(mapStateToProps)(TextCard);
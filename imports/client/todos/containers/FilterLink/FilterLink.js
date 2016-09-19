import { connect } from 'react-redux';
import { todosSetVisibilityFilter } from '../../actions';
import FilterLink from '../../components/FilterLink';

const mapStateToProps = (state, props) => ({
  isActive: props.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch(todosSetVisibilityFilter(props.filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);

import React, { PropTypes } from 'react';
import { compose, withHandlers } from 'recompose';

let input;

const TodoAdd = ({ onSubmit }) => (
  <div>
    <form onSubmit={onSubmit}>
      <input ref={(node) => { input = node; }} />
      <button type="submit">
        Add Todo
      </button>
    </form>
  </div>
);

TodoAdd.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const enhance = compose(
  withHandlers({
    onSubmit: ({
      onSubmit,
    }) => (event) => {
      event.preventDefault();

      if (input.value.trim()) {
        onSubmit(input.value);
        input.value = '';
      }
    },
  }),
);

export default enhance(TodoAdd);

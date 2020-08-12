import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { sendCommentForm } from 'actions/PostListActions';

export const CommentForm = (props) => {
  const { openCommentForm, formStatus, postId } = props;
  const dispatch = useDispatch();

  const initialFormValues = {
    author: '',
    comment: '',
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formCheckbox, setFormCheckbox] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormError(false);

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onFormSubmit = (formValues, checkboxStatus) => {
    if (formValues.author && formValues.comment && checkboxStatus) {
      dispatch(sendCommentForm(formValues, postId));
    } else {
      setFormError(!formError);
    }
  };

  return (
    <div>
      <input
        type='text'
        name='author'
        value={formValues.commentAuthorName}
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='comment'
        value={formValues.comment}
        onChange={handleInputChange}
      />

      <p>
        <label>
          <input
            name='formCheckbox'
            type='checkbox'
            defaultChecked={formCheckbox}
            onClick={() => setFormCheckbox(!formCheckbox)}
          />
          <span>Mark checkbox</span>
        </label>
      </p>
      {formError ? <p>An error ocurred while sending form!</p> : null}

      <button onClick={() => onFormSubmit(formValues, formCheckbox)}>
        Send comment
      </button>
      <button onClick={() => openCommentForm(!formStatus)}>Close</button>
    </div>
  );
};

CommentForm.propTypes = {
  openCommentForm: PropTypes.func.isRequired,
  formStatus: PropTypes.bool.isRequired,
  postId: PropTypes.string.isRequired,
};

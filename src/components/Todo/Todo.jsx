import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RiDeleteBinLine } from 'react-icons/ri';
import { DeleteButton, TodoWrapper, EditButton, InputSearch, SaveButton, CancelButton } from './Todo.styled';
import { deleteTodo, editTodo } from '../../redux/todoSlice';
import { Text } from '../Text/Text.styled'

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();

  const [editedText, setEditedText] = useState(text);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleSave = () => {
    dispatch(editTodo({ id, text: editedText }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedText(text);
  };

  const onClickDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{counter}
      </Text>
      {isEditing ? (
        <>
          <InputSearch value={editedText} onChange={handleInputChange} />
          <SaveButton onClick={handleSave}>Save</SaveButton>
          <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        </>
      ) : (
        <>
          <Text>{text}</Text>
          <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
          <DeleteButton onClick={onClickDelete}>
            <RiDeleteBinLine size={24} />
          </DeleteButton>
        </>
      )}
    </TodoWrapper>
  );
};

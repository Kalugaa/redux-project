import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/todoSlice';
import { Grid, GridItem, Text, Todo } from 'components';


export const TodoList = () => {
  const todos = useSelector(selectTodos);


  const [editedTodoId, setEditedTodoId] = useState(null);
  const [editedText, setEditedText] = useState('');

  const handleEdit = (id, text) => {
    setEditedTodoId(id);
    setEditedText(text);
  };


  return (
    <>
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ... </Text>
      )}

      <Grid>
        {todos.length > 0 &&
          todos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo
                id={todo.id}
                text={todo.text}
                counter={index + 1}
                onEdit={handleEdit}
              />
            </GridItem>
          ))}
      </Grid>
    </>
  );
};
import React, { useState } from 'react';
import Todo from './Todo';
import './index.css';

const TodoList = () => {
  const [inputList, setInputList] = useState('');

  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = (event) => {
    event.preventDefault();
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });

    setInputList('');
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <form onSubmit={listOfItems}>
        <div className="main_div">
          <div className="center_div">
            <br />
            <h1> React Todo List </h1>
            <br />
            <input
              type="text"
              placeholder="Add your Todo"
              value={inputList}
              onChange={itemEvent}
              required
            />
            <button type="submit"> + </button>

            <ol>
              {/* <li> {inputList} </li> */}
              {Items.map((itemval, index) => {
                return (
                  <Todo
                    key={index}
                    id={index}
                    text={itemval}
                    onSelect={deleteItems}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </form>
    </>
  );
};

export default TodoList;

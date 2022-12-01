import React, { useState } from "react";
import "./App.css";
import "./component/Header/Header";
import Header from "./component/Header/Header";
import List from "./component/List/List";

const App = () => {
  const [lists, setLists] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      todo: "리액트 기초를 공부합시다!",
      isDone: false,
    },
    {
      id: 0,
      title: "리액트 공부하기",
      todo: "리액트 기초를 공부합시다!",
      isDone: true,
    },
  ]);

  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");

  const addListHandler = () => {
    const newList = {
      id: lists.length + 1,
      title: title,
      todo: todo,
      isDone: false,
    };
    setLists([...lists, newList]);
    setTitle("");
    setTodo("");
  };

  const deleteList = (id) => {
    const deleteTodoList = lists.filter((list) => list.id !== id);
    setLists(deleteTodoList);
  };

  const doneList = (id) => {
    const doneTodoList = lists.map((list) => {
      if (list.id === id) {
        list.isDone = !list.isDone;
        return list;
      } else {
        return list;
      }
    });
    setLists(doneTodoList);
  };

  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div>
        <div className="create">
          <div className="input-group">
            <label htmlFor="title">제목</label>
            <input
              className="input"
              id="title"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            ></input>
            <label htmlFor="todo">내용</label>
            <input
              className="input"
              id="todo"
              placeholder="내용을 입력하세요"
              value={todo}
              onChange={(event) => setTodo(event.target.value)}
            ></input>
          </div>
          <button className="add_btn" onClick={addListHandler}>
            추가하기
          </button>
        </div>
      </div>
      <div className="Todo">
        <div className="working">
          <h1>Working...🔥</h1>
          <div>
            {lists.map((list) => {
              if (list.isDone === false) {
                return (
                  <List
                    setList={setLists}
                    delete={deleteList}
                    done={doneList}
                    list={list}
                    key={list.id}
                  ></List>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <div className="done">
          <h1>Done! 🎉</h1>
          {lists.map((list) => {
            if (list.isDone === true) {
              return (
                <List
                  setList={setLists}
                  delete={deleteList}
                  done={doneList}
                  list={list}
                  key={list.id}
                ></List>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

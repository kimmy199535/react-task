import React from "react";
import "./List.css";

const List = (props) => {
  return (
    <div className="list-container">
      <div className="list">
        <div className="list-title">{props.list.title}</div>
        <div>{props.list.todo}</div>
      </div>
      <div className="btn-container">
        <button
          className="delete-btn"
          onClick={() => {
            props.delete(props.list.id);
          }}
        >
          삭제하기
        </button>
        <button
          className="state-btn"
          onClick={() => {
            props.done(props.list.id);
          }}
        >
          {props.list.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default List;

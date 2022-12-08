import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/modules/todo";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const StForm = styled.form`
  border: none;
  padding: 50px;
  background-color: rgb(199, 220, 220);
  border-radius: 15px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 100px;
`;

const StInputGroup = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 15px;
  font-weight: 700;
  font-size: 1.1rem;
`;

const StInput = styled.input`
  padding: 10px 70px;
  border: none;
  border-radius: 10px;
  background-color: white;
`;

const StAddBtn = styled.button`
  width: 150px;
  height: 40px;
  margin-right: 20px;

  border: none;
  border-radius: 10px;
  color: white;
  background-color: rgb(95, 111, 93);
  font-weight: 700;
`;

function AddForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  const toDo = (event) => {
    event.preventDefault();
    if (title === "" || body === "") {
      return alert("제목과 타이틀을 전부 입력하세요.");
    } else {
      const newTodo = { id: uuidv4(), title: title, body: body, isDone: false };
      setTitle("");
      setBody("");
      dispatch(createTodo(newTodo));
    }
  };

  return (
    <StForm>
      <StInputGroup>
        <label htmlFor="title">제목</label>
        <StInput
          id="title"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></StInput>
        <label htmlFor="todo">내용</label>
        <StInput
          id="todo"
          placeholder="내용을 입력하세요"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></StInput>
      </StInputGroup>
      <StAddBtn onClick={toDo}>추가하기</StAddBtn>
    </StForm>
  );
}

export default AddForm;

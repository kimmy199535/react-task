import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, doneTodo } from "../redux/modules/todo";
import styled from "styled-components";

const StTodoList = styled.div`
  display: flex;
  flex-direction: column;
`;

const StList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

const StTodo = styled.div`
  border: 3px solid rgb(120, 112, 112);
  border-radius: 10px;
  width: 300px;
  padding: 20px;
  line-height: 40px;
`;

const StBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  gap: 10px;
`;

const StBtn = styled.button`
  border: 2px solid ${(props) => props.boderColor};
  border-radius: 10px;

  background-color: transparent;
  font-weight: 400;
  padding: 10px 20px 10px 20px;
  width: 120px;
`;

function List() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <StTodoList>
      <div className="working">
        <h1>Working...🔥</h1>
        <StList>
          {todos.map((todo) => {
            if (!todo.isDone) {
              return (
                <StTodo key={todo.id}>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/${todo.id}`}
                  >
                    상세보기
                  </Link>
                  <div style={{ fontSize: "1.2rem" }}>{todo.title}</div>
                  <div>{todo.body}</div>
                  <StBtnContainer>
                    <StBtn
                      onClick={() => {
                        dispatch(deleteTodo(todo.id));
                      }}
                      boderColor="rgb(195, 43, 43)"
                    >
                      삭제하기
                    </StBtn>
                    <StBtn
                      onClick={() => {
                        dispatch(doneTodo(todo.id));
                      }}
                      boderColor="green"
                    >
                      완료
                    </StBtn>
                  </StBtnContainer>
                </StTodo>
              );
            } else {
              return null;
            }
          })}
        </StList>
      </div>
      <div className="done">
        <h1>Done! 🎉</h1>
        <StList>
          {todos.map((todo) => {
            if (todo.isDone === true) {
              return (
                <StTodo key={todo.id}>
                  <Link
                    to={`/${todo.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    상세보기
                  </Link>
                  <div style={{ fontSize: "1.2rem" }}>{todo.title}</div>
                  <div>{todo.body}</div>
                  <StBtnContainer>
                    <StBtn
                      onClick={() => {
                        dispatch(deleteTodo(todo.id));
                      }}
                      boderColor="rgb(195, 43, 43)"
                    >
                      삭제하기
                    </StBtn>
                    <StBtn
                      onClick={() => {
                        dispatch(doneTodo(todo.id));
                      }}
                      boderColor="green"
                    >
                      {todo.isDone ? "취소" : "완료"}
                    </StBtn>
                  </StBtnContainer>
                </StTodo>
              );
            } else {
              return null;
            }
          })}
        </StList>
      </div>
    </StTodoList>
  );
}
export default List;

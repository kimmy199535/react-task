import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const StDetailList = styled.div`
  border: 1px solid rgb(120, 112, 112);
  border-radius: 10px;
  padding: 40px;
  line-height: 60px;
  width: 500px;
  height: 300px;
`;

const StDetailHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function Work() {
  const todos = useSelector((state) => state.todos);

  const param = useParams();
  return (
    <StDetailContainer>
      {todos.map((todo) => {
        if (todo.id === param.id) {
          return (
            <StDetailList>
              <StDetailHeader>
                <div>ID: ( {todo.id} ) </div>
                <div>
                  <Link
                    to={`/`}
                    style={{
                      textDecoration: "none",
                      color: "#372e2e",
                      border: "1px solid #b0b0b0",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  >
                    이전으로
                  </Link>
                </div>
              </StDetailHeader>
              <div style={{ fontSize: "1.5rem" }}>{todo.title}</div>
              <div>{todo.body}</div>
            </StDetailList>
          );
        }
      })}
    </StDetailContainer>
  );
}

export default Work;

import React from "react";
import styled from "styled-components";

const StBox = styled.div`
  border: 1px solid rgb(132, 96, 96);
  padding: 20px 30px 20px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 600;
`;

const Header = () => {
  return (
    <StBox>
      <div>My Todo List</div>
      <div>React</div>
    </StBox>
  );
};

export default Header;

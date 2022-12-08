import React from "react";
import Header from "../component/Header";
import List from "../component/List";
import AddForm from "../component/AddForm";
import styled from "styled-components";

const StBox = styled.div`
  color: #4c4c4c;
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Home = () => {
  return (
    <StBox>
      <Header />
      <AddForm />
      <List />
    </StBox>
  );
};

export default Home;

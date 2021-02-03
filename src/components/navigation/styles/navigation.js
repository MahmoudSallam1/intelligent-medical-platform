import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.div`
  background-color: #1db5e4;
  width:200px;
  position:absolute;
  top:4.3em;
  left:0;
  height:95vh;
`;

export const List = styled.ul`
  margin-top: 20px;
  padding: 2em;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.li`
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  color: white;
  padding: 1em;

  &:hover {
    color: #fab91c;
  }
`;


export const ButtonLink = styled(ReachRouterLink)`
  background-color: #fff;
  color: #1db5e4;
  border: 0;
  border-radius: 3px;
  padding: 0.5em 1.5em;
  cursor: pointer;
  font-size:0.9rem;
  font-weight:300;
  text-decoration: none;
  margin-bottom:20px;

  &:hover {
    background: #fab91c;
    color:white;
  }
`;


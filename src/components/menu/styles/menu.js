import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1db5e4;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
`;


export const List = styled.ul`
  margin-top: 50px;
  padding: 2em;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.a`
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  color: white;
  padding: 1em;
  transition: color 0.3s linear;

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
  font-size: 0.9rem;
  font-weight: 300;
  text-decoration: none;
  margin-bottom: 20px;

  &:hover {
    background: #fab91c;
    color: white;
  }
`;

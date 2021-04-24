import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";




export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 2em;
  color:#555;
  font-size:0.9rem;

`;

export const Logo = styled.img`
  object-fit: cover;
  width: 130px;
`;

export const ButtonLink = styled(ReachRouterLink)`
  background-color: #1db5e4;
  color: white;
  border: 0;
  border-radius: 3px;
  padding: 0.5em 1.5em;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #fab91c;
  }
`;

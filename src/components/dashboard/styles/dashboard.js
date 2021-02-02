import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f6fa;
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 100vh auto;
  grid-template-areas:
    "nav session"
    "nav session";
`;

export const Session = styled.div`
  grid-area: session;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const SessionInsights = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 200px));
  gap: 1em;
`;

export const Insight = styled.div`
  background-color: #fff;
  padding: 3em 2em;
  color: #6b6c6f;
  font-size: 0.8rem;
  border-radius: 5px;
  font-weight: 400;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.09);
`;

export const SessionCard = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 15em;
  border-radius: 10px;
  color: #6b6c6f;
  font-size: 0.9rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.09);
`;

export const SessionIcon = styled.img`
  width: 20%;
  cursor: pointer;
`;

export const Navigation = styled.div`
  background-color: #1db5e4;
  grid-area: nav;
`;

export const List = styled.ul`
  margin-top: 0;
  padding: 1em;
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

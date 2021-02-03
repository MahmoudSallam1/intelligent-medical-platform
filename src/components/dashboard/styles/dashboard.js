import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f6fa;
 
`;

export const Session = styled.div`
  display: grid;
  gap:1em;
  align-items: center;
  justify-content: center;
  padding:2em;
`;

export const SessionInsights = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 200px));
  gap: 1em;
  align-items:center;
  justify-content:center;

  @media (max-width: 650px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 10em;
  border-radius: 10px;
  color: #6b6c6f;
  font-size: 0.9rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.09);
  @media (max-width: 650px) {
   
  }
`;

export const SessionIcon = styled.img`
  width: 20%;
  cursor: pointer;
`;

import styled from "styled-components";

// Container,Title,Content

export const Container = styled.section`
  background: #02303f;
  padding: 5em 7em;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 1.3rem;
`;
export const Content = styled.p`
  color: #f5f6fa;
  opacity: 0.7;
  font-size: 0.9rem;
  font-weight: 300;
  width:50%;
  
  @media (max-width: 769px) {
    width: auto;

  }
`;

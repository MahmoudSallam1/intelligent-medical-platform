import styled from "styled-components";
// Container, Title, Row, Column   Text, Icon

export const Container = styled.section`
  text-align: center;
  padding: 1.5em 5em;
  max-width: 1000px;
  margin: 0 auto;
`;
export const Title = styled.h2`
  margin-top: 2em;
  font-size: 1.8rem;
`;

export const Row = styled.div`
  margin-top: 3em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.5em;

`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:nth-child(2) {
    background: white;
    padding: 8em 0em;
    margin-bottom: 1em;
    text-align: center;
    box-shadow: 10px 10px 18px 0px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    transition: all 0.3s ease;
  }
  &:nth-child(2):hover {
    transform: scale(1.05);
  }
`;
export const Text = styled.p`
  color: #6b6c6f;
  opacity: 0.8;
  font-size: 0.9rem;
  line-height: 1.5;
  width: 60%;
  font-weight: 300;
`;
export const Icon = styled.img`
  object-fit: cover;
  width: 60px;
`;

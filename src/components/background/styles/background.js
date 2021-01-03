import styled from "styled-components";

export const BackgroundImage = styled.div`
  background-color: #404040;
  background-blend-mode: multiply;
  background-image: url("../images/bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
  display: flex;
  align-items: center;
  padding-left: 7em;
  @media (max-width: 550px) {
    justifiy-content: center;
    text-align: center;
    margin:0 auto;
    padding-left: 0em;
    /* background-color: #1db5e4;
    background-image: none; */
  }
`;

export const Title = styled.h1`
  position: relative;
  z-index:100;
  color: #fff;
  font-size: 3.8rem;
  font-weight: bold;
  line-height: 0.9;
  width: 35%;
  @media (max-width: 768px) {
    width: 80%;
    text-align:center;
    font-size: 3rem;
  }

  @media (max-width: 450px) {
    width: 80%;
    text-align:center;
    font-size: 2.3rem;
    line-height:1.2;
    margin:0 auto;
  }
`;

export const Span = styled.span`
  /* position: absolute;
  content: "";
  height: 15px;
  width: 22%;
  top: 25rem;
  z-index:1;
  left: 7.2rem;
  color:#FAB91C;
  background:#FAB91C; */
`;

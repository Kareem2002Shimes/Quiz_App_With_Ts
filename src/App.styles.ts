import styled, { createGlobalStyle } from "styled-components";
import image from "./images/nature.jpg";
export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        font-family:"Catamaran",sans-serif;
    }
    html{
        height:100%
    }
    body{
        background-image:url(${image});
        background-size:cover;
        margin:0;
        padding:0;
        display:flex;
        justify-content:center;
    }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",
      sans-seirf;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-weight: 400;
    filter: drop-shadow(2px 2px #0085a3);
    text-align: center;
    margin: 20px;
  }
  > p {
    color: #fff;
    .score {
      color: #fff;
      font-size: 2rem;
      margin: 0;
    }
  }
  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    transition: transform 0.3s ease;
    &:active {
      transform: scale(0.7);
    }
  }
  .start {
    max-width: 200px;
  }
`;

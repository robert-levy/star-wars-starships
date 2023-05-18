import styled, {keyframes} from "styled-components";

export const Wrapper = styled.div`
    width:90%;
    margin: 40px 0px;
    display:flex;
    flex-direction: column;
    gap:50px;
    overflow:scroll;
    align-items:center;
    height: 70vh;
    ::-webkit-scrollbar {
        width: 0.5em;
      }

`
// Keyframes for the spinning animation
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadMoreButton = styled.button`
padding-bottom: 35px;
background-color: #007bff;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;
position: relative;
overflow: hidden;
transition: background-color 0.3s ease;
min-width:150px;
&:hover {
  background-color: #0056b3;
}

&.loading::after {
  content: '';
  position: absolute;
  top: 30%;
  left: 41%;
  transform: translate(-40%, -50%);
  width: 20px;
  height: 20px;
  border: 2px solid #fff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
}
`
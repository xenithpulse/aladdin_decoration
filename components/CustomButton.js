import styled from "styled-components";

const Button = styled.button`
  display: ${({ block }) => (block ? "block" : "inline-block")};
  border-radius: ${({ radius }) => (radius === "full" ? "9999px" : "4px")};
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: ${({ gradient }) => gradient || "linear-gradient(to right, #f87171, #fbbf24)"};
  border: none;
  box-shadow: ${({ shadow }) => shadow || "0 4px 6px rgba(0, 0, 0, 0.1)"};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ gradientHover }) => gradientHover || "linear-gradient(to right, #f87171, #fbbf24)"};
  }
`;

export default Button;

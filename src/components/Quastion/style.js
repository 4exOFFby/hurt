import Styled from "styled-components";

const StyledLabel = Styled.label`
    font-family: "Neucha", "Arial", sans-serif;
    font-size: 20px;
    display: inline-block;
    vertical-align: middle;
    color: white;
    margin-right: 20px;
    margin-bottom: 5px;
`;

const StyledInput = Styled.input`
    font-family: "Lobster", "Arial", sans-serif;
    font-size: 20px;
    color: white;
    border: none;
    border-bottom: 2px solid white;
    background-color: transparent;
    width: 70%;

    &:focus {
        outline: none;
        border-bottom: 2px solid gold;
    }

    @media (max-width: 1199px) {
        width: 100%;
    }
`;

const InputWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 30px;
    width: 100%;
`;

export {
  StyledLabel,
  StyledInput,
  InputWrapper
};
import Styled from 'styled-components';
import { Container } from '../Container/style';
import { AcceptedButton } from '../AcceptedButton/AcceptedButton';

const Title = Styled.h1`
    font-family: ${(props) => props.theme.titleFont};
    font-size: 66px;
    margin: 0;
    margin-bottom: 30px;

    @media (max-width: 767px) {
        font-size: 36px;
    }
`;

const Description = Styled.p`
    font-family: ${(props) => props.theme.basicFont};
    font-size: 24px;
    margin: 0;
    margin-bottom: 50px;

    @media (max-width: 1199px) {
        margin-bottom: 70px;
    }

    @media (max-width: 767px) {
        margin-bottom: 50px;
    }
`;

const StyledMainScreen = Styled.section`
    background-color: black;
    color:  ${(props) => props.theme.colorDark};
    padding: 0 0 30px 0;
`;


const MainScreenContainer = Styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 767px) {
        align-items: center;
    }
`;

const MainScreenButton = Styled(AcceptedButton)`
    align-self: center;
    width: 25%;
    padding: 12px 20px;

    @media (max-width: 1199px) {
        align-self: flex-start;
    }

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export {
  Title,
  Description,
  StyledMainScreen,
  MainScreenContainer,
  MainScreenButton
}
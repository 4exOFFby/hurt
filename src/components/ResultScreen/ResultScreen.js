import React from "react";
import { ResultSection, ResultContainer} from './style';
import { Description } from '../MainScreen/style';
import { ResultMoreButton, ResultBackButton} from './style';
import { user } from '../FormQuastions/FormQuastions';


export function ResultScreen ({setVisible}) {
  const clearText = () => {
    user.name = '';
    user.age = '';
    user.scare = '';
    user.cash = '';
    user.email = '';
    user.acceptation = '';
  };

  return (
    <ResultSection>
      <ResultContainer>
        <Description>
          Меня зовут {user.name}, мне {user.age}, я боюсь {user.scare}, я зарабатываю {user.cash}, моя электронная почта {user.email}, &#173;
          {user.acceptation}.
        </Description>
        <ResultMoreButton text="Ещё..." onClick={() => {setVisible(2); clearText();}} />
        <ResultBackButton text="На главную" onClick={() => {setVisible(1); clearText();}} />
      </ResultContainer>
    </ResultSection>
  )
};
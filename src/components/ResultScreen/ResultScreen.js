import React from "react";
import { ResultSection, ResultContainer} from './style';
import { Description } from '../MainScreen/style';
import { ResultMoreButton, ResultBackButton} from './style';
import { user } from '../FormQuastions/FormQuastions';
import { DATA } from "../../assets/mock";


const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
         Тебе {user.age}!? А выглядишь как {DATA[0][getRandomInt(0,9)]} &#173; 
         {user.name} - звучит, как будто {DATA[1][getRandomInt(0,9)]} &#173; 
         Что за фамилия - {user.scare}!?, с такой фамилией лучше {DATA[2][getRandomInt(0,9)]} &#173; 
         Ты реально зарабатываешь {user.cash}!? {DATA[3][getRandomInt(0,9)]} &#173;
         Кто в здравом уме мог придумать такую почту - {user.email}!? {DATA[4][getRandomInt(0,9)]} &#173;
         {user.acceptation}!? А я что просил написать!? С такой внимательностью тебе лучше {DATA[5][getRandomInt(0,9)]}
        </Description>
        <ResultMoreButton text="Ещё..." onClick={() => {setVisible(2); clearText();}} />
        <ResultBackButton text="На главную" onClick={() => {setVisible(1); clearText();}} />
      </ResultContainer>
    </ResultSection>
  )
};
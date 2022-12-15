import React from "react";
import { Quastion } from "../Quastion/Quastion";
import Clock from '../../img/png/clock.png';
import { FormSection, FormContainer, FormScreenImage, StyledFormQuastions, FormAcceptedButton, FormResetButton } from './style';


function FormQuastions ({setVisible}) {
  return (
    <FormSection>
      <FormContainer>
        <FormScreenImage src={Clock} alt="Песочные часы" width="400" height="400" />
        <StyledFormQuastions method="post" action="https://echo.htmlacademy.ru">
          <Quastion text="Как Вас зовут?" id="user-name" name="user-name" type="text" />
          <Quastion text="Сколько Вам лет?" id="user-age"  name="user-age" type="number" />
          <Quastion text="Что для Вас самое страшное?" id="user-scare"  name="user-scare" type="text" />
          <Quastion text="Сколько Вы зарабатываете?" id="user-cash"  name="user-cash" type="number" />
          <Quastion text="Ваш email" name="user-email" id="user-email"  type="email" />
          <Quastion text="Напишите &laquo;Я сагласен&raquo;" id="user-acceptation" name="user-acceptation" type="text"/>
          <FormAcceptedButton text="Получить оскорбления" tupe="submit" onClick={() => setVisible(3)}/>
          <FormResetButton text="Я передумал..." tupe="reset" onClick={() => setVisible(4)}/>
        </StyledFormQuastions>
      </FormContainer>
    </FormSection>
  )
};

export {FormQuastions};
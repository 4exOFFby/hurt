import React, {useState} from "react";
import { Quastion } from "../Quastion/Quastion";
import Clock from '../../img/png/clock.png';
import { FormSection, FormContainer, FormScreenImage, StyledFormQuastions, FormAcceptedButton, FormResetButton } from './style';

const user = {
  name: '',
  age: '',
  scare: '',
  cash: '',
  email: '',
  acceptation: '',
}

function FormQuastions ({setVisible}) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [scare, setScare] = useState('');
  const [cash, setCash] = useState('');
  const [email, setEmail] = useState('');
  const [acceptation, setAcceptation] = useState('');

  user.name = name;
  user.age = age;
  user.scare = scare;
  user.cash = cash;
  user.email = email;
  user.acceptation = acceptation;

  const gedValueHandler = (e) => {
    switch(e.target.name) {
      case 'user-name':
      user.name = setName(e.target.value);
      break;
      case 'user-age':
      user.age = setAge(e.target.value);
      break;
      case 'user-scare':
      user.scare = setScare(e.target.value);
      break;
      case 'user-cash':
      user.cash = setCash(e.target.value);
      break;
      case 'user-email':
      user.email = setEmail(e.target.value);
      break;
      case 'user-acceptation':
      user.acceptation = setAcceptation(e.target.value);
      break;
      default:
      console.log('Error');
    }
  }

  const checkLengthInput = () => {
    if (
      user.name.length > 0 &&
      user.age.length > 0 &&
      user.scare.length > 0 &&
      user.cash.length > 0 &&
      user.email.length > 0 &&
      user.acceptation.length > 0
    ) {
      setVisible(3);
    }
  };

  return (
    <FormSection>
      <FormContainer>
        <FormScreenImage src={Clock} alt="Песочные часы" width="400" height="400" />
        <StyledFormQuastions method="post" action="https://echo.htmlacademy.ru" onChange={e => gedValueHandler(e)}>
          <Quastion text="Как Вас зовут?" id="user-name" name="user-name" type="text" />
          <Quastion text="Сколько Вам лет?" id="user-age"  name="user-age" type="number" />
          <Quastion text="Что для Вас самое страшное?" id="user-scare"  name="user-scare" type="text" />
          <Quastion text="Сколько Вы зарабатываете?" id="user-cash"  name="user-cash" type="number" />
          <Quastion text="Ваш email" name="user-email" id="user-email"  type="email" />
          <Quastion text="Напишите &laquo;Я сагласен&raquo;" id="user-acceptation" name="user-acceptation" type="text"/>
          <FormAcceptedButton text="Получить оскорбления" type="submit" onClick={() => checkLengthInput()}/>
          <FormResetButton text="Я передумал..." type="reset" onClick={() => setVisible(3)}/>
        </StyledFormQuastions>
      </FormContainer>
    </FormSection>
  )
};


export {FormQuastions, user};
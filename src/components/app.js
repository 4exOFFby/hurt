import React, { useState } from 'react';
import { Notation } from './Notation/Notation'
import { MainScreen } from './MainScreen/MainScreen';
import { FormQuastions } from './FormQuastions/FormQuastions';


export function App () {
  const [visible, setVisible] = useState(1);

  if (visible === 1) {
    return (
      <MainScreen  setVisible={setVisible} />
    )
  }

  if (visible === 2) {
    return (
      <FormQuastions setVisible={setVisible} />
    )
  }

  if (visible === 3) {
    return (
      <FormQuastions setVisible={setVisible} />
    )
  }

  if (visible === 4) {
    return (
      <Notation setVisible={setVisible} />
    )
  }
}
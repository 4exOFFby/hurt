import React from "react";
import { NotationSection, NotationContainer, NotationTitle, NotationButton} from './style'



export function Notation ({setVisible}) {
  return (
    <NotationSection>
      <NotationContainer>
        <NotationTitle>Трусишка!</NotationTitle>
        <NotationButton text="На главную" type="button" onClick={() => setVisible(1)} ></NotationButton>
      </NotationContainer>
    </NotationSection>
  )
}
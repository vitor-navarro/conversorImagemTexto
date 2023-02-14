import { ArrowRight } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Quadrado = styled.div`
  width: 70vw;
  height: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  button {
    border: 0;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
  }
`

export const Seta = styled(ArrowRight).attrs(() => ({
  size: 64
}))`
  @media(max-width: 768px) {
    transform: rotate(90deg);
  }
`
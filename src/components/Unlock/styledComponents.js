// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  height: 100vh;
`

export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  height: 150px;
  width: 150px;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
`

export const Button = styled.button`
  background-color: #06b6d4;
  color: #e2e8f0;
  border-radius: 12px;
  border: none;
  margin-top: 70px;
  padding: 14px;
  width: 120px;
  font-size: 24px;
  cursor: pointer;
`

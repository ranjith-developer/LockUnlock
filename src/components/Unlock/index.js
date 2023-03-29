// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  LockContainer,
  Image,
  Paragraph,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)
  const imageUrl = lock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altText = lock ? 'lock' : 'unlock'
  const displayText = lock ? 'Your Device is Locked' : 'Your Device is Unlocked'
  const buttonText = lock ? 'Unlock' : 'Lock'

  const buttonHandler = () => {
    setLock(prevState => !prevState)
  }

  return (
    <MainContainer>
      <LockContainer>
        <Image src={imageUrl} alt={altText} />
        <Paragraph>{displayText}</Paragraph>
      </LockContainer>
      <Button type="button" onClick={buttonHandler}>
        {buttonText}
      </Button>
    </MainContainer>
  )
}

export default Unlock

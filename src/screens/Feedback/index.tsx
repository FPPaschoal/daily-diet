import { Container, Title, Subtitle, Img, StrongSubtitle } from './styles';
import imgPositive from '@assets/feedbackPositivo.png';
import imgNegative from '@assets/feedbackNegativo.png';
import { Button } from '@components/Button';
import { View } from 'react-native';

type FeedbackProps = {
  type: 'positive' | 'negative';
};

export function Feedback({ type }: FeedbackProps) {
  return (
    <Container>
      {type === 'positive' ? (
        <>
          <Title type={type}>Continue assim!</Title>
          <Subtitle>
            Você continua <StrongSubtitle>dentro da dieta.</StrongSubtitle>
            Muito bem!
          </Subtitle>
          <Img source={imgPositive} />
        </>
      ) : (
        <>
          <Title type={type}>Que pena!</Title>
          <Subtitle>
            Você <StrongSubtitle>saiu da dieta</StrongSubtitle> dessa vez, mas
            continue se esforçando e não desista!
          </Subtitle>
          <Img source={imgNegative} />
        </>
      )}
      <Button text="Ir para a página inicial" />
    </Container>
  );
}

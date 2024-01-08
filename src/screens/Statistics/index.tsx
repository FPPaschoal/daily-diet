import { Container, Content, Title } from './styles';
import { Header } from '@components/Header';
import { DataContainer } from '@components/DataContainer';

export function Statistics() {
  return (
    <Container>
      <Header type="SUCCESS" />
      <Content>
        <Title>Estatísticas gerais</Title>

        <DataContainer
          textData="22"
          description="melhor sequência de pratos dentro da dieta"
        />
        <DataContainer textData="109" description="refeições registradas" />

        <DataContainer
          textData="99"
          description="refeições dentro da dieta"
          type="SUCCESS"
        />
        <DataContainer
          textData="10"
          description="refeições fora da dieta"
          type="WARNING"
        />
      </Content>
    </Container>
  );
}

import { Container, Content, Content2, Title } from './styles';
import { Header } from '@components/Header';
import { DataContainer } from '@components/DataContainer';

type StatisticsProps = {
  type: 'SUCCESS' | 'WARNING';
};

export function Statistics({ type }: StatisticsProps) {
  return (
    <Container>
      <Header
        type={type}
        size="LARGE"
        subtitle="das refeições dentro da dieta"
        title="98.08%"
      />
      <Content>
        <Title>Estatísticas gerais</Title>

        <DataContainer
          textData="22"
          description="melhor sequência de pratos dentro da dieta"
        />
        <DataContainer textData="109" description="refeições registradas" />
        <Content2>
          <DataContainer
            style={{ flex: 1 }}
            textData="99"
            description="refeições dentro da dieta"
            type="SUCCESS"
          />
          <DataContainer
            style={{ flex: 1 }}
            textData="10"
            description="refeições fora da dieta"
            type="WARNING"
          />
        </Content2>
      </Content>
    </Container>
  );
}

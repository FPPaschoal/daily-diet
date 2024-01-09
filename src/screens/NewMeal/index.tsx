import { Header } from '@components/Header';
import { Container, Content } from './styles';
import { InputComponent } from '@components/Input';
import { View } from 'react-native';

export function NewMeal() {
  return (
    <Container>
      <Header title="Nova refeição" />
      <Content>
        <InputComponent label="Nome" />

        <InputComponent label="Descrição" multiline numberOfLines={4} />

        <View style={{ flexDirection: 'row', gap: 24 }}>
          <InputComponent label="Data" style={{ flex: 1 }} />
          <InputComponent label="Hora" style={{ flex: 1 }} />
        </View>
      </Content>
    </Container>
  );
}

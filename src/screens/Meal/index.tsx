import { Text, View } from 'react-native';
import {
  Container,
  Content,
  DayTime,
  MealDayTime,
  MealDescription,
  MealName,
  StatusPoint,
  StatusText,
} from './styles';
import { Header } from '@components/Header';
import { Button } from '@components/Button';

type MealProps = {
  type: 'SUCCESS' | 'WARNING';
};
export function Meal({ type }: MealProps) {
  return (
    <Container>
      <Header title="Refeição" type={type} />
      <Content>
        <View style={{ gap: 12 }}>
          <MealName>Sanduíche</MealName>
          <MealDescription>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </MealDescription>
          <DayTime>Data e hora</DayTime>
          <MealDayTime>12/12/2021 às 12:00</MealDayTime>
          {type === 'SUCCESS' ? (
            <StatusText>
              <StatusPoint type={type}>• </StatusPoint> dentro da dieta
            </StatusText>
          ) : (
            <StatusText>
              <StatusPoint type={type}>• </StatusPoint> fora da dieta
            </StatusText>
          )}
        </View>
        <View style={{ gap: 12 }}>
          <Button text="Editar refeição" iconName="PencilSimpleLine" />
          <Button text="Excluir refeição" type="OUTLINE" iconName="Trash" />
        </View>
      </Content>
    </Container>
  );
}

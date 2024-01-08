import { MealData } from '@components/MealData';
import { Container, Day } from './styles';

export function DayList() {
  return (
    <Container>
      <Day>12.08.22</Day>
      <MealData />
      <MealData />
    </Container>
  );
}

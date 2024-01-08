import { Container, Divider, Meal, MealTime, Status } from './styles';

export function MealData() {
  return (
    <Container>
      <MealTime>20:00</MealTime>
      <Divider />
      <Meal>X-tudo</Meal>
      <Status />
    </Container>
  );
}

import { Container, Divider, Meal, MealTime, Status } from './styles';

type MealDataProps = {
  type: 'SUCCESS' | 'WARNING';
};

export function MealData({ type }: MealDataProps) {
  return (
    <Container>
      <MealTime>20:00</MealTime>
      <Divider />
      <Meal>X-tudo</Meal>
      <Status type={type} />
    </Container>
  );
}

import { Text, TextInput, View } from 'react-native';
import { Container, YesNoCircle, YesNoContainer } from './styles';
import { useState } from 'react';
import { InputComponent } from '@components/InputComponent';

type InputCheckBoxProps = {
  onValueChange: (newValue: boolean[]) => void;
};

export function InputCheckBox({ onValueChange }: InputCheckBoxProps) {
  const [isSelect, setIsSelect] = useState([false, false]);

  const handleSelect = (index: number) => {
    const newIsSelect = isSelect.map((value, i) => {
      if (i === index) {
        if (value === true) {
          return false;
        }
        return true;
      }
      return false;
    });
    setIsSelect(newIsSelect);
    onValueChange(newIsSelect);
  };

  return (
    <View>
      <Container>
        <YesNoContainer
          onPress={() => handleSelect(0)}
          isSelected={isSelect[0]}
          type="y"
        >
          <YesNoCircle type="y" />
          <Text>Sim</Text>
        </YesNoContainer>

        <YesNoContainer
          onPress={() => handleSelect(1)}
          isSelected={isSelect[1]}
          type="n"
        >
          <YesNoCircle type="n" />
          <Text>Não</Text>
        </YesNoContainer>
      </Container>
    </View>
  );
}

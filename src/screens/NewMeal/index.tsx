import { Header } from '@components/Header';
import { Container, Content, Form, Label } from './styles';
import { InputComponent } from '@components/InputComponent';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react';
import { Button } from '@components/Button';
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { InputCheckBox } from '@components/InputCheckBox';

export function NewMeal() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    dateTime: new Date(),
  });

  const handleChange = (
    name: string,
    value: string | NativeSyntheticEvent<TextInputChangeEventData> | Date
  ) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate;
    if (currentDate === undefined) {
      return;
    }
    handleChange('dateTime', currentDate);
  };

  const showMode = (currentMode: 'date' | 'time') => {
    DateTimePickerAndroid.open({
      value: form.dateTime,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const handleValueChange = (newValue: boolean[]) => {
    console.log(`\nSim:${newValue[0]}\nNão:${newValue[1]}`); // Aqui você pode lidar com o novo valor
  };

  return (
    <Container>
      <Header title="Nova refeição" />
      <Content>
        <Form>
          <InputComponent
            label="Nome"
            key="name"
            onChangeText={(value) => handleChange('name', value)}
            value={form.name}
          />
          <InputComponent
            label="Descrição"
            key={'description'}
            onChangeText={(value) => handleChange('description', value)}
            value={form.description}
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />
          <View style={{ flexDirection: 'row', gap: 24 }}>
            <TouchableOpacity
              onPress={() => showMode('date')}
              style={{ flex: 1 }}
            >
              <InputComponent
                label="Data"
                key={'date'}
                editable={false}
                onChange={(value) => handleChange('date', value)}
                value={`${String(form.dateTime.getDate()).padStart(
                  2,
                  '0'
                )}/${String(form.dateTime.getMonth() + 1).padStart(
                  2,
                  '0'
                )}/${form.dateTime.getFullYear()}`}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => showMode('time')}
              style={{ flex: 1 }}
            >
              <InputComponent
                label="Hora"
                key={'time'}
                editable={false}
                onChange={(value) => handleChange('time', value)}
                value={`${String(form.dateTime.getHours()).padStart(
                  2,
                  '0'
                )}:${String(form.dateTime.getMinutes()).padStart(2, '0')}`}
              />
            </TouchableOpacity>
          </View>

          <Label>Está dentro da dieta?</Label>
          <InputCheckBox onValueChange={handleValueChange} />
        </Form>

        <Button text="Cadastrar refeição" />
        {/* <Button text="Editar refeição" iconName="PencilSimpleLine" />
        <Button text="Excluir refeição" iconName="Trash" type="OUTLINE" /> */}
      </Content>
    </Container>
  );
}

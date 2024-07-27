import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, Button, TextInput } from 'react-native';
import WheelPickerExpo from 'react-native-wheel-picker-expo';

const YearPicker = ({ value, onChange }) => {
  console.log(value);console.log(value);console.log(value);
  const currentYear = new Date().getFullYear();
  const [show, setShow] = useState(false);
  const [selectedYear, setSelectedYear] = useState(value!=0 ? parseInt(value) : currentYear);

  const openPicker = () => setShow(true);
  const closePicker = () => setShow(false);

  const handleConfirm = () => {
    onChange(selectedYear.toString());
    closePicker();
  };

  const years = Array.from({ length: 121 }, (_, i) => currentYear - i);

  return (
    <View>
      <TextInput
        style={styles.input}
        value={value.toString()}
        onFocus={openPicker}
        placeholder="YYYY"
        keyboardType="numeric"
      />
      <Modal visible={show} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.pickerContainer}>
            <WheelPickerExpo
              height={300}
              width={150}
              initialSelectedIndex={years.indexOf(selectedYear)}
              items={years.map(year => ({ label: year.toString(), value: year }))}
              onChange={({ item }) => setSelectedYear(item.value)}
            />
            <Button title="Confirm" onPress={handleConfirm} />
            <Button title="Cancel" onPress={closePicker} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
});

export default YearPicker;

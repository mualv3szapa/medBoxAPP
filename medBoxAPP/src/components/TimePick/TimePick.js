import DateTimePicker from "react-native-modal-datetime-picker";

export const TimePick = ({ isVisible, mode, onConfirm, onCancel }) => {
  return (
    <DateTimePicker
      isVisible={isVisible}
      mode={mode}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

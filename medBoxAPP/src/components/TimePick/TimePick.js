import DateTimePicker from "react-native-modal-datetime-picker";

export const DateTimePick = ({ isVisible, mode, onConfirm, onCancel }) => {
  return (
    <DateTimePicker
      isVisible={isVisible}
      mode={mode}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export const LastDayPick = ({ isVisible, mode, onConfirm, onCancel }) => {
  return (
    <DateTimePicker
      isVisible={isVisible}
      mode={mode}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

import {
  BtnCadastrarText,
  BtnCadastrarView,
  BtnTimeText,
  BtnTimeView,
} from "./Style";

export const ButtonToCadastrar = ({ text, onPress }) => {
  return (
    <BtnCadastrarView onPress={onPress}>
      <BtnCadastrarText>{text}</BtnCadastrarText>
    </BtnCadastrarView>
  );
};

export const ButtonTime = ({ text, onPress }) => {
  return (
    <BtnTimeView onPress={onPress}>
      <BtnTimeText>{text}</BtnTimeText>
    </BtnTimeView>
  );
};

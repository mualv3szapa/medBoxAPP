import {
  BtnCadastrarMedView,
  BtnCadastrarText,
  BtnCadastrarView,
  BtnCancelTxt,
  BtnCancelView,
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
export const ButtonCadastrarMedicamento = ({ text, onPress }) => {
  return (
    <BtnCadastrarMedView onPress={onPress}>
      <BtnCadastrarText>{text}</BtnCadastrarText>
    </BtnCadastrarMedView>
  );
};

export const ButtonTime = ({ text, onPress }) => {
  return (
    <BtnTimeView onPress={onPress}>
      <BtnTimeText>{text}</BtnTimeText>
    </BtnTimeView>
  );
};

export const ButtonCancel = ({ text, onPress }) => {
  return (
    <BtnCancelView onPress={onPress}>
      <BtnCancelTxt>{text}</BtnCancelTxt>
    </BtnCancelView>
  );
};

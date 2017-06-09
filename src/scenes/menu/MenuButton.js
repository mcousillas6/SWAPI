import {
  MKButton,
  MKColor,
} from 'react-native-material-kit';

const style = {
  margin: 10,
  padding: 20,
};

export default (text) => {
  return new MKButton.Builder()
    .withBackgroundColor(MKColor.Teal)
    .withStyle(style)
    .withTextStyle({
      color: 'white',
      fontWeight: 'bold',
    })
    .withText(text);
};

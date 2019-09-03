import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 34 : 0,
  },
  header: {
    margin: 20,
    fontWeight: 'bold',
    color: 'forestgreen',
    fontSize: 20,
  },
  bodyView: {
    height: 50,
    margin: 10,
    flexDirection: 'row',
  },
  buttonsView: {
    padding: 10,
    height: 45,
    borderRadius: 10,
    backgroundColor: 'darkviolet',
  },
  textView: {
    margin: 10,
    fontWeight: 'bold',
    color: 'darkblue',
    fontSize: 17,
  },
});

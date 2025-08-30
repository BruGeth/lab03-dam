import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 4,
    alignItems: 'center',
    overflow: 'hidden',
  },
  photo: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 12,
  },
  age: {
    fontSize: 18,
    color: 'green',
    marginVertical: 4,
  },
  role: {
    fontSize: 15,
    color: 'gray',
    marginBottom: 10,
  },
});
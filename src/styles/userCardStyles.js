import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    margin: 8,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  age: {
    fontSize: 18,
    marginBottom: 6,
  },
  role: {
    fontSize: 16,
    color: 'gray',
  },
});
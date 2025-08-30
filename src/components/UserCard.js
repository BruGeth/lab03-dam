import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/userCardStyles';

const UserCard = ({ name, age, photo, role, isOnline }) => (
  <View style={styles.card}>
    <Image source={{ uri: photo }} style={styles.photo} />
    <View style={styles.nameRow}>
      <Text style={styles.name}>{name}</Text>
      {isOnline && <View style={styles.onlineDot} />}
    </View>
    <Text style={styles.age}>{age} años</Text>
    {role && <Text style={styles.role}>{role}</Text>}
  </View>
);

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  role: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default UserCard;
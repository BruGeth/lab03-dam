import { SafeAreaView } from 'react-native';
import UserCard from './src/components/UserCard';

export default function App() {
  return (
    <SafeAreaView>
      <UserCard
        name="Bruno"
        age={25}
        photo="https://randomuser.me/api/portraits/men/1.jpg"
        role="Desarrollador"
      />
    </SafeAreaView>
  );
}
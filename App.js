import {
  SafeAreaView,
  View,
  useWindowDimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import UserCard from "./src/components/UserCard";

const users = [
  {
    name: "Bruno",
    age: 25,
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    role: "Desarrollador",
    isOnline: true,
  },
  {
    name: "Ana",
    age: 28,
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    isOnline: false,
  },
  {
    name: "Carlos",
    age: 32,
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    role: "QA",
    isOnline: true,
  },
  {
    name: "Lucía",
    age: 22,
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    role: "Product Owner",
    isOnline: false,
  },
];

export default function App() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 500;
  const cardWidth = isSmallScreen ? "100%" : "48%";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.grid}>
          {users.map((user, idx) => (
            <View key={idx} style={[styles.cardWrapper, { width: cardWidth }]}>
              <UserCard {...user} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  scroll: {
    padding: 12,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardWrapper: {
    marginBottom: 16,
  },
});

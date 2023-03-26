import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import MenuOption from "../components/MenuOption";
import Controls from "../components/Controls";
import car from "../assets/images/car.png";
import menuOptions from "../assets/menuOptions";
import { FontAwesome } from "@expo/vector-icons";

export default function Page() {
  return (
    <View style={styles.container}>
      {/* Header..................................... */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My model S</Text>
          <Text style={styles.subtitle}>Parkedf</Text>
        </View>
        <FontAwesome name="user-circle-o" size={30} color="gray" />
      </View>

      {/* Image........................................................ */}

      <Image source={car} style={styles.image} resizeMode="contain" />

      {/* Controls........................................................ */}
      <Controls />

      {/* Menu Option Item */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={menuOptions} // this should be an array of items
        renderItem={MenuOption}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818",
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
    color: "#eee",
    fontWeight: "bold",
  },
  subtitle: {
    color: "gray",
    fontWeight: "500",
  },
  image: {
    width: "100%",
    // backgroundColor: "red",
    height: 300,
  },
});

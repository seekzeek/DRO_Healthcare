import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign, EvilIcons, FontAwesome5, Entypo } from "@expo/vector-icons";

import { PRODUCTDATA } from "../shared/data";
import { theme } from "../constants";
import ProductCard from "../components/ProductCard";
import BagSheet from "../components/BagSheet";

const Product = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearch = () => setSearchOpen((prevState) => !prevState);

  const filterList = (list) => {
    return list.filter((listItem) =>
      listItem.productName
        .toString()
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  };

  return (
    <React.Fragment>
      <BagSheet />
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.topWrapper}>
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              style={styles.arrowLeftIcon}
            />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>125 Item(s)</Text>
            </View>
          </View>
          <View style={styles.middleIcons}>
            <View style={styles.ballBackground}>
              <FontAwesome5 name="sort" size={24} color="black" />
            </View>
            <View style={styles.ballBackground}>
              <AntDesign name="filter" size={24} color="black" />
            </View>
            <TouchableOpacity onPress={handleSearch}>
              <View style={styles.ballBackground}>
                <AntDesign name="search1" size={24} color="black" />
              </View>
            </TouchableOpacity>
          </View>

          {searchOpen ? (
            <View style={styles.searchContainer}>
              <View style={styles.searchWrap}>
                <EvilIcons name="search" size={24} color="black" />
                <TextInput
                  style={styles.searchBar}
                  onChangeText={(search) => setSearch(search)}
                  value={search}
                  autoFocus
                ></TextInput>
                <TouchableOpacity onPress={() => setSearch("")}>
                  <Entypo name="cross" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          ) : null}

          <View style={styles.cards}>
            {filterList(PRODUCTDATA).map((product, i) => (
              <ProductCard
                key={i}
                navigation={navigation}
                productImg={product.productImg}
                productName={product.productName}
                productType={product.productType}
                productmg={product.productmg}
                productPrice={product.productPrice}
              />
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </React.Fragment>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 15,
    fontFamily: theme.COLORS.regular,
  },

  topWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 35,
  },

  textContainer: {
    flex: 1,
  },

  itemText: {
    textAlign: "center",
    color: "black",
    fontFamily: theme.FONTS.regular,
  },

  middleIcons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  ballBackground: {
    width: 50,
    height: 50,
    borderRadius: 100,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.COLORS.light_grey,
  },

  cards: {
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  searchContainer: {
    marginVertical: 30,
    marginBottom: 5,
  },

  searchWrap: {
    backgroundColor: theme.COLORS.white,
    overflow: "hidden",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 25,
    height: 50,
  },

  searchBar: {
    fontSize: 14,
    flex: 1,
    flexDirection: "row",
    height: "100%",
    paddingHorizontal: 12,
    backgroundColor: theme.COLORS.white,
    fontFamily: theme.FONTS.regular,
    color: theme.COLORS.grey,
  },
});

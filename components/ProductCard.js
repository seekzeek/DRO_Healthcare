import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import { theme } from "../constants";

const ProductCard = ({
  productImg,
  productName,
  productType,
  productmg,
  productPrice,
  navigation,
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("ProductDetails")}
    >
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image source={productImg} style={styles.cardImg} />
        </View>
        <View style={styles.productDesc}>
          <Text style={styles.productName}>{productName}</Text>
          <Text style={styles.productType}>{productType}</Text>
          <Text style={styles.productmg}>{productmg}</Text>
        </View>
        <View style={styles.productPrice}>
          <Text style={styles.productPriceTxt}>${productPrice}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    width: "47%",
    height: 250,
    marginVertical: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
    backgroundColor: theme.COLORS.white,
    borderWidth: 0,
    padding: 10,
    display: "flex",
    alignItems: "center",
  },

  imgContainer: {
    width: 200,
    maxWidth: "80%",
    height: 100,
  },

  cardImg: {
    width: "100%",
    height: "100%",
  },

  productDesc: {
    paddingVertical: 15,
  },

  productName: {
    fontFamily: theme.FONTS.medium,
    fontWeight: "600",
    fontSize: 15,
    marginVertical: 4,
  },

  productType: {
    fontFamily: theme.FONTS.light,
    fontSize: 12,
    marginVertical: 2,
  },

  productmg: {
    fontFamily: theme.FONTS.light,
    fontSize: 12,
  },

  productPrice: {
    width: "auto",
    marginLeft: "auto",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: theme.COLORS.light_grey,
    color: "black",
    borderRadius: 20,
  },

  productPriceTxt: {
    fontFamily: theme.FONTS.regular,
  },
});

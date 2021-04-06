import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Ionicons,
  Fontisto,
  SimpleLineIcons,
  AntDesign,
} from "@expo/vector-icons";

import { theme } from "../constants";
import Ibuprofen from "../assets/img/ibuprofen.png";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { PRODUCTDETAILS } from "../shared/data";

const ProductDetails = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topWrapper}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <AntDesign
              name="arrowleft"
              size={20}
              color="black"
              style={styles.arrowLeftIcon}
            />
          </TouchableWithoutFeedback>
          <View style={styles.bagContainer}>
            <SimpleLineIcons name="handbag" size={24} color="#f5f5f5" />
            <Text style={styles.itemText}>3</Text>
          </View>
        </View>

        <View style={styles.productImg}>
          <Image source={Ibuprofen} style={styles.img} />
        </View>

        <View style={styles.productMeta}>
          <View style={styles.productName}>
            <Text style={styles.productNameTxt}>Garlic Oil</Text>
            <Text style={styles.productType}>Soft Gel - 650mg</Text>
          </View>
          <View style={styles.productManufacturer}>
            <View style={styles.ball}></View>
            <View style={styles.manufacture}>
              <Text style={styles.soldby}>Sold by</Text>
              <Text style={styles.manufactureTxt}>Emzor Pharmaceuticals</Text>
            </View>
          </View>
          <View style={styles.addRemoveWrap}>
            <View style={styles.addRemove}>
              <Ionicons name="remove-outline" size={24} color="black" />
              <Text style={styles.itemCurNum}>1</Text>
              <Ionicons name="add" size={24} color="black" />
            </View>
            <Text style={styles.pack}>Pack(s)</Text>
            <Text style={styles.price}>$385</Text>
          </View>
        </View>

        <View style={styles.productDetails}>
          <Text style={styles.productDetailsTxt}>Product Details</Text>
          <View style={styles.detailsProper}>
            {PRODUCTDETAILS.map((product) => (
              <View style={styles.detail} key={product.top}>
                {product.icon}
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.topTxt}>{product.top}</Text>
                  <Text style={styles.bTxt}>{product.bottom}</Text>
                </View>
              </View>
            ))}
          </View>
          <Text style={styles.productBottomTxt}>
            1 pack of Garlic Oil contains 3 unit(s) of 10 Tablet(s)
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <SimpleLineIcons name="handbag" size={24} color="#f5f5f5" />
            <Text style={styles.btnTxt}>Add to bag</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    fontFamily: theme.COLORS.regular,
  },

  topWrapper: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 35,
  },

  bagContainer: {
    padding: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: theme.COLORS.dro_purple,
  },

  itemText: {
    color: theme.COLORS.light_grey,
    fontFamily: theme.FONTS.regular,
    marginLeft: 5,
  },

  productImg: {
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    width: 140,
    height: 170,
  },

  productMeta: {
    paddingVertical: 10,
  },

  productNameTxt: {
    fontFamily: theme.FONTS.medium,
    color: "#161616",
  },

  productType: {
    fontFamily: theme.FONTS.light,
    color: "#161616",
    fontSize: 13,
    marginTop: 2,
  },

  productManufacturer: {
    paddingVertical: 30,
    flexDirection: "row",
    alignItems: "center",
  },

  ball: {
    width: 40,
    height: 40,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.COLORS.grey,
  },

  manufacture: {
    marginLeft: 13,
  },

  soldby: {
    fontFamily: theme.FONTS.light,
    color: "#161616",
    fontSize: 12,
    textTransform: "uppercase",
  },

  manufactureTxt: {
    fontFamily: theme.FONTS.semi_bold,
    color: theme.COLORS.dro_turquoise,
    fontSize: 14,
  },

  addRemoveWrap: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },

  addRemove: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 1,
  },

  itemCurNum: {
    marginHorizontal: 13,
  },

  pack: {
    fontFamily: theme.FONTS.light,
    fontSize: 13,
    marginLeft: 8,
    color: theme.COLORS.grey,
  },

  price: {
    marginLeft: "auto",
    fontFamily: theme.FONTS.medium,
    color: "#161616",
  },

  productDetails: {
    paddingVertical: 20,
  },

  productDetailsTxt: {
    fontFamily: theme.FONTS.semi_bold,
    color: theme.COLORS.grey,
    fontSize: 15,
    textTransform: "uppercase",
  },

  detailsProper: {
    paddingVertical: 30,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  detail: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    flexBasis: "49%",
  },

  topTxt: {
    fontFamily: theme.FONTS.light,
    textTransform: "uppercase",
    fontSize: 11,
  },

  bTxt: {
    fontFamily: theme.FONTS.semi_bold,
    textTransform: "capitalize",
  },

  productBottomTxt: {
    textAlign: "center",
    fontFamily: theme.FONTS.light,
    marginVertical: 10,
    fontSize: 12,
  },

  btnContainer: {
    paddingTop: 100,
  },

  btn: {
    textAlign: "center",
    paddingVertical: 20,
    paddingHorizontal: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.COLORS.dro_purple,
    borderRadius: 17,
  },

  btnTxt: {
    fontFamily: theme.FONTS.medium,
    color: theme.COLORS.light_grey,
    marginLeft: 10,
  },
});

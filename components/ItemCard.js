import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { theme } from "../constants";

const ItemCard = ({ itemImg, item, itemNumber, itemType, itemPrice }) => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.item}>
          <View style={styles.itemImg}>
            <Image source={itemImg} style={styles.img} />
          </View>
          <View style={styles.numberOfItems}>
            <Text style={styles.numberTxt}>{itemNumber}X</Text>
          </View>
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{item}</Text>
            <Text style={styles.itemTypeTxt}>{itemType}</Text>
          </View>
          <View style={styles.itemPrice}>
            <Text style={styles.itemPriceTxt}>${itemPrice}</Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* {drop != -1 ? (<View style={styles.itemDropdown}>
                    <AntDesign name="delete" size={24} color="#f1f1f1" />
                    <View style={styles.addRemoveItem}>
                        <View style={styles.ballWrap}>
                            <Ionicons name="remove-outline" size={24} color="black" />
                        </View>
                        <Text style={styles.itemCurNum}>1</Text>
                        <View style={styles.ballWrap}>
                            <Ionicons name="add" size={24} color="black" />
                        </View>
                    </View>
                </View>): null} */}
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  item: {
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  itemImg: {
    width: 55,
    height: 55,
    borderRadius: 100,
    padding: 9,
    backgroundColor: theme.COLORS.light_grey,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  img: {
    width: "100%",
    height: "100%",
  },

  numberOfItems: {
    marginLeft: 13,
  },

  numberTxt: {
    fontFamily: theme.FONTS.regular,
    color: theme.COLORS.light_grey,
  },

  itemDetails: {
    marginLeft: 13,
  },

  itemName: {
    fontFamily: theme.FONTS.regular,
    color: theme.COLORS.light_grey,
  },

  itemTypeTxt: {
    fontFamily: theme.FONTS.light,
    fontSize: 13,
    color: theme.COLORS.light_grey,
  },

  itemPrice: {
    marginLeft: "auto",
  },

  itemPriceTxt: {
    fontFamily: theme.FONTS.medium,
    color: theme.COLORS.light_grey,
  },

  itemDropdown: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  addRemoveItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  ballWrap: {
    width: 35,
    height: 35,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.COLORS.light_grey,
  },

  itemCurNum: {
    marginHorizontal: 10,
    fontFamily: theme.FONTS.regular,
    color: theme.COLORS.light_grey,
  },
});

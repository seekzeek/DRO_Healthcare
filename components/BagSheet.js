import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import { SimpleLineIcons } from "@expo/vector-icons";

import { theme } from "../constants";
import { BAGITEMS } from "../shared/data";
import ItemCard from "../components/ItemCard";

const { width, height } = Dimensions.get("window");

const BagSheet = () => {
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
        <View style={styles.panelTop}>
          <View style={styles.panelTopLeft}>
            <SimpleLineIcons name="handbag" size={24} color="#f5f5f5" />
            <Text style={styles.panelTopTxt}>Bag</Text>
          </View>
          <View style={styles.panelTopRight}>
            <Text style={styles.panelTopRTxt}>3</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderContent = () => (
    <React.Fragment>
      <View style={styles.panel}>
        <View
          style={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 10 }}
        >
          <View style={styles.panelContentTop}>
            <Text style={styles.panelContentTxt}>
              Tap on an item for add, remove, delete options
            </Text>
          </View>
        </View>
        <View style={styles.items}>
          {BAGITEMS.map((item, i) => (
            <ItemCard
              key={i}
              itemImg={item.itemImg}
              itemNumber={item.itemNumber}
              item={item.item}
              itemType={item.itemType}
              itemPrice={item.itemPrice}
            />
          ))}
        </View>
        <View style={styles.bottom}>
          <View style={styles.totalPrice}>
            <Text style={styles.totalTxt}>Total</Text>
            <Text style={styles.totalPriceTxt}>$2590</Text>
          </View>
          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkoutBtnTxt}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );

  const fall = new Animated.Value(1);
  const sheetRef = React.useRef(null);

  return (
    <React.Fragment>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[height * 0.95, 70]}
        initialSnap={1}
        renderContent={renderContent}
        renderHeader={renderHeader}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
    </React.Fragment>
  );
};

export default BagSheet;

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.COLORS.dark_purple,
    // elevation: 1,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  panelHeader: {
    alignItems: "center",
  },

  panelHandle: {
    width: 40,
    height: 5,
    borderRadius: 4,
    backgroundColor: theme.COLORS.light_grey,
    // marginBottom: 2,
  },

  panelTop: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },

  panelTopLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  panelTopTxt: {
    marginLeft: 10,
    fontFamily: theme.FONTS.regular,
    color: theme.COLORS.light_grey,
  },

  panelTopRight: {
    width: 35,
    height: 35,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.COLORS.light_grey,
  },

  panelTopRTxt: {
    fontFamily: theme.FONTS.regular,
  },

  panel: {
    backgroundColor: theme.COLORS.dark_purple,
    paddingTop: 20,
    width,
    height,
    // paddingBottom: 40
  },

  panelContentTop: {
    backgroundColor: theme.COLORS.light_grey,
    padding: 10,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  panelContentTxt: {
    fontFamily: theme.FONTS.light,
    fontSize: 12,
  },

  items: {
    padding: 20,
  },

  bottom: {
    paddingTop: 25,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },

  totalPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  totalTxt: {
    fontFamily: theme.FONTS.regular,
    color: theme.COLORS.light_grey,
    fontSize: 16,
  },

  totalPriceTxt: {
    fontFamily: theme.FONTS.medium,
    color: theme.COLORS.light_grey,
    fontSize: 16,
  },

  checkoutBtn: {
    padding: 20,
    borderRadius: 50,
    backgroundColor: theme.COLORS.light_grey,
  },

  checkoutBtnTxt: {
    fontFamily: theme.FONTS.semi_bold,
    color: "#161616",
    textAlign: "center",
    fontSize: 15,
  },
});

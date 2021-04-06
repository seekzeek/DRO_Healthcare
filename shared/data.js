import React from "react";
import { Fontisto, AntDesign } from "@expo/vector-icons";

import Ibuprofen from "../assets/img/ibuprofen.png";
import Promomed from "../assets/img/promomed.png";
import meds1 from "../assets/img/meds1.png";
import meds2 from "../assets/img/meds2.png";

const PRODUCTDATA = [
  {
    productName: "Ibuprofen",
    productImg: Ibuprofen,
    productType: `Sainbury's healthcare`,
    productmg: "Capsules - 200mg",
    productPrice: "200",
  },
  {
    productName: "Keztil syrup",
    productImg: meds2,
    productType: `Sainbury's healthcare`,
    productmg: "Capsules - 200mg",
    productPrice: "1200",
  },
  {
    productName: "Ibuprofen",
    productImg: Ibuprofen,
    productType: `Sainbury's healthcare`,
    productmg: "Capsules - 200mg",
    productPrice: "200",
  },
  {
    productName: "Keztil syrup",
    productImg: meds2,
    productType: `Sainbury's healthcare`,
    productmg: "Capsules - 200mg",
    productPrice: "1200",
  },
  {
    productName: "Keztil syrup",
    productImg: Promomed,
    productType: `Sainbury's healthcare`,
    productmg: "Capsules - 200mg",
    productPrice: "1200",
  },
  {
    productName: "Ibuprofen",
    productImg: Ibuprofen,
    productType: `Sainbury's healthcare`,
    productmg: "Capsules - 200mg",
    productPrice: "200",
  },
  {
    productName: "Keztil syrup",
    productImg: Promomed,
    productType: `Sainbury's healthcare`,
    productmg: "Capsules - 200mg",
    productPrice: "1200",
  },
  {
    productName: "Ibuprofen",
    productImg: Ibuprofen,
    productType: `Sainbury's healthcare`,
    productmg: "Capsules - 200mg",
    productPrice: "200",
  },
];

const BAGITEMS = [
  {
    item: "Vitamin E 400",
    itemImg: Ibuprofen,
    itemNumber: "1",
    itemType: "Capsule",
    itemPrice: "925",
  },
  {
    item: "Azithromycin Dry",
    itemImg: meds2,
    itemNumber: "1",
    itemType: "Syrup",
    itemPrice: "945",
  },
  {
    item: "Emzovasc-5",
    itemImg: Promomed,
    itemNumber: "1",
    itemType: "Tablet -5mg",
    itemPrice: "335",
  },
  {
    item: "Garlic Oil",
    itemImg: Ibuprofen,
    itemNumber: "1",
    itemType: "Soft Gel - 650mg",
    itemPrice: "385",
  },
];

const PRODUCTDETAILS = [
  {
    icon: <Fontisto name="drug-pack" size={24} color="#9f5de2" />,
    top: "pack size",
    bottom: "3x10",
  },

  {
    icon: <Fontisto name="drug-pack" size={24} color="#9f5de2" />,
    top: "constituents",
    bottom: "Garlic Oil",
  },

  {
    icon: <Fontisto name="drug-pack" size={24} color="#9f5de2" />,
    top: "Dispensed in",
    bottom: "Packs",
  },

  {
    icon: <AntDesign name="qrcode" size={24} color="#9f5de2" />,
    top: "Product id",
    bottom: "PROBRYVPW1",
  },
];

export { PRODUCTDATA, BAGITEMS, PRODUCTDETAILS };

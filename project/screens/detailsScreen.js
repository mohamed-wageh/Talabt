import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
} from "react-native";
import { COLOURS, Items } from "../database/model/database";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductInfo = ({ route, navigation }) => {
  const { productID } = route.params;

  const [product, setProduct] = useState({});

  const width = Dimensions.get("window").width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get product data by productID

  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == productID) {
        await setProduct(Items[index]);
        return;
      }
    }
  };

  //add to cart

  const addToCart = async (id) => {
    let itemArray = await AsyncStorage.getItem("cartItems");
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);

      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        ToastAndroid.show(
          "Item Added Successfully to cart",
          ToastAndroid.SHORT
        );
        navigation.navigate("Home");
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        ToastAndroid.show(
          "Item Added Successfully to cart",
          ToastAndroid.SHORT
        );
        navigation.navigate("Home");
      } catch (error) {
        return error;
      }
    }
  };

  //product horizontal scroll product card
  const renderProduct = ({ item, index }) => {
    return (
      <View
        style={{
          width: width,
          height: 240,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={item}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLOURS.white,
        position: "relative",
      }}
    >
      <StatusBar
        backgroundColor={COLOURS.backgroundLight}
        barStyle="dark-content"
      />
      <ScrollView>
        <View
          style={{
            width: "100%",
            backgroundColor: COLOURS.backgroundLight,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 16,
              paddingLeft: 16,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack("Home")}>
              <Entypo
                name="chevron-left"
                style={{
                  fontSize: 18,
                  color: COLOURS.backgroundDark,
                  padding: 12,
                  backgroundColor: COLOURS.white,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={product.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
              marginTop: 32,
            }}
          >
            {product.productImageList
              ? product.productImageList.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: "clamp",
                  });
                  return (
                    <Animated.View
                      key={index}
                      style={{
                        width: "16%",
                        height: 2.4,
                        backgroundColor: COLOURS.black,
                        opacity,
                        marginHorizontal: 4,
                        borderRadius: 100,
                      }}
                    ></Animated.View>
                  );
                })
              : null}
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 6,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 14,
            }}
          >
            <Entypo
              name="shopping-cart"
              style={{
                fontSize: 18,
                color: COLOURS.blue,
                marginRight: 6,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,
              }}
            >
              Shopping
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 4,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                letterSpacing: 0.5,
                marginVertical: 4,
                color: COLOURS.black,
                maxWidth: "84%",
              }}
            >
              {product.productName}
            </Text>
            <Ionicons
              name="link-outline"
              style={{
                fontSize: 24,
                color: COLOURS.blue,
                backgroundColor: COLOURS.blue + 10,
                padding: 8,
                borderRadius: 100,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              color: COLOURS.black,
              fontWeight: "400",
              letterSpacing: 1,
              opacity: 0.5,
              lineHeight: 20,
              maxWidth: "85%",
              // maxHeight: 44,
              marginBottom: 18,
            }}
          >
            {product.description}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 14,
              borderBottomColor: COLOURS.backgroundLight,
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  color: COLOURS.blue,
                  backgroundColor: COLOURS.backgroundLight,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 12,
                  borderRadius: 100,
                  marginRight: 10,
                }}
              >
                <Entypo
                  name="location-pin"
                  style={{
                    fontSize: 16,
                    color: COLOURS.blue,
                  }}
                />
              </View>
              <Text> Faculty of Science,{"\n"}Cairo University</Text>
            </View>
            <Entypo
              name="chevron-right"
              style={{
                fontSize: 22,
                color: COLOURS.backgroundDark,
              }}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 16,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                maxWidth: "85%",
                color: COLOURS.black,
                marginBottom: 4,
              }}
            >
              $ {product.productPrice}.00
            </Text>
            <Text>
              Tax Rate 2%~ ${product.productPrice / 20} ($
              {product.productPrice + product.productPrice / 20})
            </Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 10,
          height: "8%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => (product.isAvailable ? addToCart(product.id) : null)}
          style={{
            width: "86%",
            height: "90%",
            backgroundColor: COLOURS.blue,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              letterSpacing: 1,
              color: COLOURS.white,
              textTransform: "uppercase",
            }}
          >
            {product.isAvailable ? "Add to cart" : "Not Avialable"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductInfo;
// import React from "react";
// import {
//   ImageBackground,
//   SafeAreaView,
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
// } from "react-native";

// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import COLORS from "../constant/colors";
// const DetailsScreen = ({ navigation, route }) => {
//   const furniture = route.params;

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
//       <View style={style.header}>
//         <View style={style.headerBtn}>
//           <Icon name="chevron-left" size={25} onPress={navigation.goBack} />
//         </View>
//         <Text style={{ fontWeight: "bold", fontSize: 18 }}>Details</Text>
//         <View style={style.headerBtn}>
//           <Icon name="dots-vertical" size={25} color={COLORS.blue} />
//         </View>
//       </View>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Furniture image */}

//         <ImageBackground
//           resizeMode="cover"
//           style={style.backgroundImage}
//           source={furniture.image}
//         >
//           <View
//             style={{
//               height: 60,
//               width: 70,
//               backgroundColor: COLORS.blue,
//               position: "absolute",
//               borderTopLeftRadius: 15,
//               right: 0,
//               bottom: 0,
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 marginBottom: 5,
//               }}
//             >
//               <Icon name="star" color={COLORS.yellow} size={18} />
//               <Text
//                 style={{
//                   fontSize: 10,
//                   color: COLORS.white,
//                   fontWeight: "bold",
//                 }}
//               >
//                 4.5
//               </Text>
//             </View>
//             <Text
//               style={{ fontSize: 9, color: COLORS.white, fontWeight: "bold" }}
//             >
//               250 Reviews
//             </Text>
//           </View>
//         </ImageBackground>

//         <View style={style.detailsContainer}>
//           <Text
//             style={{ fontSize: 20, fontWeight: "bold", color: COLORS.blue }}
//           >
//             {furniture.name}
//           </Text>
//           <Text
//             style={{
//               marginVertical: 20,
//               fontWeight: "bold",
//               fontSize: 16,
//               color: COLORS.blue,
//             }}
//           >
//             Description
//           </Text>
//           <Text style={{ color: COLORS.dark, fontSize: 12, lineHeight: 20 }}>
//             Designed modern chair with luxury curves in an organic yet
//             structured design that holds the sitting body and provides a feeling
//             of relaxation while offering excellent back support.
//           </Text>
//           <View
//             style={{
//               marginVertical: 20,
//               flexDirection: "row",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               style={{ color: COLORS.yellow, fontSize: 22, fontWeight: "bold" }}
//             >
//               {furniture.price}
//             </Text>
//             <View style={style.quantityContainer}>
//               <View style={style.quantityBtn}>
//                 <Icon name="plus" size={20} />
//               </View>
//               <Text style={{ color: COLORS.white, fontWeight: "bold" }}>1</Text>
//               <View style={style.quantityBtn}>
//                 <Icon name="minus" size={20} />
//               </View>
//             </View>
//           </View>
//           <View style={{ flexDirection: "row", alignItems: "center" }}>
//             <View
//               style={{
//                 height: 50,
//                 width: 50,
//                 elevation: 7,
//                 marginRight: 30,
//                 borderRadius: 25,
//                 backgroundColor: COLORS.white,
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Icon name="heart-outline" size={28} color={COLORS.blue} />
//             </View>
//             <View style={style.addToCartBtn}>
//               <Text
//                 style={{ color: COLORS.white }}
//                 onPress={() => navigation.navigate("cart", furniture)}
//               >
//                 Add To Cart
//               </Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const style = StyleSheet.create({
//   backgroundImage: {
//     marginHorizontal: 20,
//     height: 300,
//     borderRadius: 15,
//     overflow: "hidden",
//   },
//   header: {
//     paddingVertical: 20,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 10,
//   },
//   headerBtn: {
//     height: 50,
//     width: 50,
//     backgroundColor: COLORS.light,
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   ratingTag: {
//     height: 30,
//     width: 35,
//     backgroundColor: COLORS.blue,
//     borderRadius: 5,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   addToCartBtn: {
//     height: 50,
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: COLORS.blue,
//     borderRadius: 10,
//     paddingHorizontal: 20,
//     marginVertical: 20,
//     flexDirection: "row",
//   },
//   detailsContainer: { flex: 1, paddingHorizontal: 20, marginTop: 40 },
//   quantityBtn: {
//     height: 25,
//     width: 25,
//     backgroundColor: COLORS.white,
//     borderRadius: 7,
//     marginHorizontal: 5,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   quantityContainer: {
//     height: 35,
//     width: 100,
//     backgroundColor: COLORS.blue,
//     borderRadius: 7,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
// });

// export default DetailsScreen;

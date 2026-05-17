import { ITEM_HEIGHT } from "@/constants";
import Colors from "@/constants/Colors";
import Font from "@/constants/Font";
import FontSize from "@/constants/FontSize";
import Spacing from "@/constants/Spacing";
import { amenities, homes } from "@/data";
import { Feather, Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Detail = () => {
  const { homeId } = useLocalSearchParams();

  if (!homeId) return null;
  const homeInfo = homes.find((h) => h.id.toString() === homeId);

  return (
    <>
      <ImageBackground source={homeInfo?.image} style={{ height: ITEM_HEIGHT }}>
        <SafeAreaView>
          <View
            style={{
              paddingHorizontal: Spacing * 2,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                height: Spacing * 6,
                width: Spacing * 6,
                overflow: "hidden",
                borderRadius: Spacing * 6,
              }}
            >
              <BlurView
                style={{
                  height: "100%",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                tint="light"
              >
                <Ionicons
                  name="chevron-back"
                  size={35}
                  color={Colors.onPrimary}
                />
              </BlurView>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                height: Spacing * 6,
                width: Spacing * 6,
                overflow: "hidden",
                borderRadius: Spacing * 6,
              }}
            >
              <BlurView
                style={{
                  height: "100%",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                tint="light"
              >
                <Feather name="box" size={35} color={Colors.onPrimary} />
              </BlurView>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>

      <View
        style={{
          paddingHorizontal: Spacing * 2,
          backgroundColor: Colors.background,
          paddingVertical: Spacing * 5,
          marginTop: -Spacing * 4,
          borderRadius: Spacing * 4,
        }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            height: Spacing * 7,
            width: Spacing * 7,
            backgroundColor: Colors.lightBackground,
            alignItems: "center",
            justifyContent: "center",
            right: Spacing * 4,
            marginTop: -Spacing * 3,
            borderWidth: Spacing,
            borderColor: Colors.background,
            borderRadius: Spacing * 6,
          }}
        >
          <Ionicons name="bookmark-outline" size={24} color={Colors.text} />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: FontSize.xLarge,
              width: "70%",
              fontFamily: Font["poppins-bold"],
              color: Colors.text,
            }}
          >
            {homeInfo?.title}
          </Text>
          <Text
            style={{
              fontSize: FontSize.medium,
              fontFamily: Font["poppins-regular"],
              color: Colors.lightText,
              marginVertical: Spacing,
            }}
          >
            {homeInfo?.location}
          </Text>
          <Text
            style={{
              fontSize: FontSize.small,
              fontFamily: Font["poppins-regular"],
              color: Colors.lightText,
            }}
            numberOfLines={4}
          >
            {homeInfo?.description}
          </Text>

          <ScrollView
            style={{ marginVertical: Spacing * 2 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {amenities.map((item) => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: Spacing * 2,
                  paddingHorizontal: Spacing * 3,
                  backgroundColor: Colors.lightBackground,
                  marginRight: Spacing * 1.5,
                  borderRadius: Spacing * 2,
                }}
                key={item.id}
              >
                <Ionicons name={item.icon} size={24} color={Colors.text} />
                <Text
                  style={{
                    fontFamily: Font["poppins-regular"],
                    fontSize: FontSize.small,
                    marginLeft: Spacing,
                  }}
                >
                  {item.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: Spacing * 2,
          position: "absolute",
          zIndex: 2,
          bottom: Spacing * 4,
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.large,
              color: Colors.text,
            }}
          >
            {homeInfo?.price}
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-regular"],
              fontSize: FontSize.small,
              color: Colors.lightText,
            }}
          >
            Per month with Tax
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            paddingVertical: Spacing * 2,
            paddingHorizontal: Spacing * 5,
            borderRadius: Spacing * 4,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              fontSize: FontSize.large,
              color: Colors.onPrimary,
            }}
          >
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Detail;

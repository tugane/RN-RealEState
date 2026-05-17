import { ITEM_HEIGHT, ITEM_WIDTH } from "@/constants";
import Colors from "@/constants/Colors";
import Font from "@/constants/Font";
import FontSize from "@/constants/FontSize";
import Spacing from "@/constants/Spacing";
import { homes, tags } from "@/data";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Home = () => {
  const [activeTag, setActiveTag] = useState<number>(tags[0].id);

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: Spacing * 2 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={{
              height: Spacing * 5,
              width: Spacing * 5,
              backgroundColor: Colors.lightBackground,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: Spacing * 3,
            }}
          >
            <Octicons name="apps" size={24} color={Colors.black} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: Spacing * 5,
              width: Spacing * 5,
              backgroundColor: Colors.lightBackground,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: Spacing * 3,
            }}
          >
            <Octicons name="search" size={24} color={Colors.black} />
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: Spacing * 2 }}>
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              fontSize: FontSize.xxLarge,
              width: "70%",
            }}
          >
            Find the Perfect Home
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-regular"],
              fontSize: FontSize.small,
            }}
          >
            Discover the best home for you
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tags.map((tag) => (
            <TouchableOpacity
              style={{
                backgroundColor:
                  activeTag === tag.id
                    ? Colors.primary
                    : Colors.lightBackground,
                paddingVertical: Spacing * 2,
                paddingHorizontal: Spacing * 3,
                borderRadius: Spacing * 5,
                marginRight: Spacing,
              }}
              onPress={() => setActiveTag(tag.id)}
              key={tag.id}
            >
              <Text
                style={{
                  fontFamily:
                    activeTag === tag.id
                      ? Font["poppins-bold"]
                      : Font["poppins-regular"],
                  color: activeTag === tag.id ? Colors.onPrimary : Colors.text,
                }}
              >
                {tag.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView
          contentContainerStyle={{
            paddingVertical: Spacing * 2,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_WIDTH + Spacing * 2}
          decelerationRate={0}
        >
          {homes.map((home) => (
            <TouchableOpacity
              onPress={() => router.push(`/${home.id}`)}
              style={{
                height: ITEM_HEIGHT,
                width: ITEM_WIDTH,
                marginRight: Spacing * 2,
                borderRadius: Spacing * 3,
                overflow: "hidden",
              }}
              key={home.id}
            >
              <ImageBackground
                style={{
                  height: "100%",
                  width: "100%",
                }}
                source={home.image}
              >
                <View
                  style={{
                    padding: Spacing * 3,
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: Colors.onPrimary,
                        fontFamily: Font["poppins-bold"],
                        fontSize: FontSize.large,
                        width: "60%",
                      }}
                    >
                      {home.title}
                    </Text>
                    <Text
                      style={{
                        color: Colors.onPrimary,
                        fontFamily: Font["poppins-bold"],
                        fontSize: FontSize.large,
                      }}
                    >
                      {home.price}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => router.push(`/${home.id}`)}
                      style={{
                        backgroundColor: Colors.background,
                        paddingVertical: Spacing * 1.5,
                        paddingHorizontal: Spacing * 3,
                        borderRadius: Spacing * 5,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: Font["poppins-semiBold"],
                          fontSize: FontSize.medium,
                        }}
                      >
                        View Home
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: Colors.background,
                        borderRadius: Spacing * 5,
                        width: Spacing * 6,
                        height: Spacing * 6,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Ionicons
                        name="bookmark-outline"
                        size={24}
                        color={Colors.text}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

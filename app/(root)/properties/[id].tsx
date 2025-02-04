import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { featuredData } from "@/assets/data/properties";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import icons from "@/constants/icons";

const Property = () => {
  const { id } = useLocalSearchParams();
  const selectedProperty = featuredData.find((property) => property.id === id);

  if (!selectedProperty) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Text className="text-lg font-bold">Property not found</Text>
      </SafeAreaView>
    );
  }

  const {
    name,
    rating,
    propertyImages,
    type,
    amenities,
    agent,
    overview,
    address,
  } = selectedProperty;

  return (
    <SafeAreaView className="bg-white h-full ">
      {/* Header */}

      <View className="flex flex-row items-center justify-between mt-5 p-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
        >
          <Image source={icons.backArrow} className="size-5" />
        </TouchableOpacity>
        <Text className="text-lg font-bold">Property Details</Text>
        <Image source={icons.bell} className="w-6 h-6" />
      </View>

      {/* Property Image Carousel */}
      <FlatList
        data={propertyImages}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={{
              width: 300,
              height: "auto",
              borderRadius: 10,
              marginHorizontal: 10,
            }}
            resizeMode="cover"
          />
        )}
        showsHorizontalScrollIndicator={false}
      />

      {/* Property Details */}
      <ScrollView className="px-4 py-4">
        {/* Property Name */}
        <Text className="text-2xl font-bold">{name}</Text>
        <Text className="text-gray-600">{address}</Text>

        {/* Rating and Type */}
        <View className="flex-row items-center my-2">
          <Text className="text-lg font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-full mr-2">
            {type}
          </Text>
          <Text className="text-lg">
            ⭐ {rating.toFixed(1)} (1,275 reviews)
          </Text>
        </View>

        {/* Amenities */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 10,
          }}
          className="my-4"
        >
          {/* Beds */}
          <View className="flex-row items-center mr-4">
            {amenities.beds > 0 && (
              <MaterialCommunityIcons
                name="bed"
                size={20}
                color="#000"
                style={{ marginRight: 5 }}
              />
            )}
            <Text className="text-lg">
              <Text className="font-bold">Beds:</Text> {amenities.beds}
            </Text>
          </View>

          {/* Baths */}
          <View className="flex-row items-center mr-4">
            {amenities.bath > 0 && (
              <MaterialCommunityIcons
                name="bathtub"
                size={20}
                color="#000"
                style={{ marginRight: 5 }}
              />
            )}
            <Text className="text-lg">
              <Text className="font-bold">Baths:</Text> {amenities.bath}
            </Text>
          </View>

          {/* Size */}
          <View className="flex-row items-center mr-4">
            <MaterialCommunityIcons
              name="ruler-square"
              size={20}
              color="#000"
              style={{ marginRight: 5 }}
            />
            <Text className="text-lg">
              <Text className="font-bold">Size:</Text> {amenities.size}
            </Text>
          </View>
          {/* Size */}
          <View className="flex-row items-center mr-4">
            <MaterialCommunityIcons
              name="smoke-detector-alert"
              size={20}
              color="#000"
              style={{ marginRight: 5 }}
            />
            <Text className="text-lg">
              <Text className="font-bold">Smoke Detectors:</Text>{" "}
              {amenities.smoke_detector ? "Yes" : "No"}
            </Text>
          </View>
          {/* Size */}
          <View className="flex-row items-center mr-4">
            <MaterialCommunityIcons
              name="wifi"
              size={20}
              color="#000"
              style={{ marginRight: 5 }}
            />
            <Text className="text-lg">
              <Text className="font-bold">Wifi:</Text>{" "}
              {amenities.wifi ? "Yes" : "No"}
            </Text>
          </View>
        </ScrollView>

        {/* Agent Information */}
        <View className="flex-row items-center my-6">
          <Image
            source={agent.image}
            style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
          />
          <View>
            <Text className="text-lg font-bold">{agent.name}</Text>

            {/* Phone Number */}
            <TouchableOpacity
              onPress={() => Linking.openURL(`tel:${agent.tel}`)}
            >
              <Text className="text-blue-500">{agent.tel}</Text>
            </TouchableOpacity>

            {/* Email Address */}
            <TouchableOpacity
              onPress={() => Linking.openURL(`mailto:${agent.email}`)}
            >
              <Text className="text-blue-500">{agent.email}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Overview */}
        <Text className="text-lg font-bold mb-2">Overview</Text>
        <Text className="text-gray-700">{overview}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Property;

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import SearchComponent from "@/components/global/SearchComponent";
import { Card, FeaturedCard } from "@/components/Card";
import Filters from "@/components/global/Filters";
import { featuredData, recommendedData } from "@/assets/data/properties";

export default function index() {
  const handleCardPress = (id: string) => {
    router.push(`/properties/${id}`);
  };
  return (
    <SafeAreaView className="bg-white h-full px-4">
      <FlatList
        data={recommendedData}
        numColumns={2}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        // ListEmptyComponent={
        //   loading ? (
        //     <ActivityIndicator size="large" className="text-primary-300 mt-5" />
        //   ) : (
        //     <NoResults />
        //   )
        // }
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className="flex flex-row   items-center">
              {/* /basic info */}
              <View className="flex flex-1 flex-row  gap-4 items-center">
                <Image source={images.avatar} className="size-[50px]" />
                <View className="flex flex-col ">
                  <Text className="text-xs">Good Monring,</Text>
                  <Text className="text-base font-semibold">Muhammad</Text>
                </View>
              </View>

              <Image source={icons.bell} className="size-[20px] " />
            </View>

            <SearchComponent />
            {/* heading divider */}
            <View className="flex flex-row justify-between items-center ">
              <Text className="text-bold text-xl font-rubik-bold">
                Featured
              </Text>
              <TouchableOpacity className=" text-semibold">
                <Text className="text-blue-600">See All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={featuredData}
              renderItem={({ item }) => (
                <FeaturedCard
                  item={item}
                  onPress={() => handleCardPress(item.id)}
                />
              )}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="flex gap-5 mt-5"
            />
            {/* heading divider */}
            <View className="flex flex-row justify-between items-center  mt-5">
              <Text className="text-bold text-xl font-rubik-bold">
                Our Recomendations
              </Text>
              <TouchableOpacity className=" text-semibold">
                <Text className="text-blue-600">See All</Text>
              </TouchableOpacity>
            </View>

            <Filters />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

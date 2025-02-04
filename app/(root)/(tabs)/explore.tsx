import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import Filters from "@/components/global/Filters";
import SearchComponent from "@/components/global/SearchComponent";
import icons from "@/constants/icons";
import { recommendedData } from "@/assets/data/properties";
import { Card } from "@/components/Card";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const explore = () => {
  return (
    <SafeAreaView className="bg-white h-full ">
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
            <View className="flex flex-row items-center justify-between mt-5">
              <TouchableOpacity
                onPress={() => router.back()}
                className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
              >
                <Image source={icons.backArrow} className="size-5" />
              </TouchableOpacity>

              <Text className="text-base mr-2 text-center font-rubik-medium text-black-300">
                Search for Your Ideal Home
              </Text>
              <Image source={icons.bell} className="w-6 h-6" />
            </View>

            <SearchComponent />

            {/* heading divider */}
            <View className="flex flex-row justify-between items-center  mt-5">
              <Text className="text-bold text-xl font-rubik-bold">
                Found 6 Properties
              </Text>
            </View>

            <Filters />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default explore;

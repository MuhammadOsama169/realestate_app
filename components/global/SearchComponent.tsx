import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import icons from "@/constants/icons";
import { useDebounce, useDebouncedCallback } from "use-debounce";

const SearchComponent = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const debouncedSearch = useDebouncedCallback(
    (text: string) => router.setParams({ query: text }),
    500
  );

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };
  return (
    <View className="m-5 px-4 z-50 rounded-lg flex flex-row items-center  justify-between  bg-accent-100 border border-primary-100 ">
      <TextInput
        value={search}
        onChangeText={handleSearch}
        placeholder="Search ..."
        className="text-sm text-black-100"
      />
      <Image source={icons.search} className="size-5" />
    </View>
  );
};

export default SearchComponent;

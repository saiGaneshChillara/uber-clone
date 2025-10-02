import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView className={"flex-1 items-center justify-center bg-white"}>
      <Text className='text-red-500'>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
// app/(tabs)/index.tsx
import { StyleSheet } from 'react-native';
import { 
  NativeBaseProvider, 
  Box, 
  Text, 
  Button, 
  VStack, 
  Center,
  Heading
} from 'native-base';

export default function HomeScreen() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="white" safeArea>
        <Center flex={1} px={4}>
          <VStack space={4} alignItems="center">
            <Heading size="lg">Hello NativeBase!</Heading>
            <Text fontSize="md" textAlign="center">
              这是一个使用 NativeBase 的简单示例
            </Text>
            <Button onPress={() => alert('按钮被点击了!')}>
              点击我
            </Button>
          </VStack>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

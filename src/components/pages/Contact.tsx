import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Flex, Heading, Box, Stack } from '@chakra-ui/layout';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Textarea } from '@chakra-ui/textarea';
import { Text } from '@chakra-ui/react';
export const Contact = () => {
  return (
    <>
      <Flex justify="center">
        <Box>
          <Heading
            fontSize={{ base: '14px', md: '30px' }}
            textAlign="center"
            as="h1"
            mt="40px"
          >
            CONTACT
          </Heading>

          <FormControl id="名前" isRequired>
            <FormLabel fontSize={{ base: '12px', md: '18px' }}>名前</FormLabel>
            <Input
              fontSize={{ base: '12px', md: '18px' }}
              w={{ base: '225px', md: '500px' }}
              bg="white"
              placeholder="名前"
            />
          </FormControl>
          <FormControl id="メールアドレス" isRequired>
            <FormLabel fontSize={{ base: '12px', md: '18px' }}>
              メールアドレス
            </FormLabel>
            <Input
              fontSize={{ base: '12px', md: '18px' }}
              bg="white"
              placeholder="メールアドレス"
            />
            <Text fontSize={{ base: '12px', md: '18px' }} fontWeight="normal">
              本文:
            </Text>
            <Textarea
              fontSize={{ base: '12px', md: '18px' }}
              placeholder="メッセージ本文"
              h={{ base: '80px', md: '200px' }}
              bg="white"
            />
            <Button
              fontSize={{ base: '12px', md: '16px' }}
              h={{ base: '30px', md: '45px' }}
              _hover={{ opacity: 0.7 }}
              w="100%"
              color="white"
              bg="black"
            >
              送信
            </Button>
          </FormControl>
        </Box>
      </Flex>
    </>
  );
};

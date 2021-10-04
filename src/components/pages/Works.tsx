import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/layout';
import wcbCafe from '../Images/wcbCafe.png';
console.log(wcbCafe);
export const Works = () => {
  return (
    <>
      <Heading
        fontSize={{ base: '14px', md: '30px' }}
        textAlign="center"
        mt="40px"
      >
        WORK
      </Heading>
      <Flex
        p="20px"
        w={{ base: 'normal', md: '600px' }}
        ml={{ base: '0', md: '170px' }}
        direction="column"
      >
        <Text
          align="center"
          fontSize={{ base: '16px', md: '20px' }}
          fontFamily="Yu Gothic"
          m="3% 0"
        >
          参考書を元に作成したカフェサイト
        </Text>
        <Box>
          <Link href="https://kosuke519.github.io/WCBCAFE-/">
            <Image
              _hover={{ shadow: 'dark-lg' }}
              src="/static/media/wcbCafe.52257593.png"
            />
          </Link>
        </Box>
        <Button mt="5%" _hover={{ opacity: '0.6' }} bg="black" color="white">
          <Link href="https://kosuke519.github.io/WCBCAFE-/">
            クリックしてご覧ください
          </Link>
        </Button>
      </Flex>
    </>
  );
};

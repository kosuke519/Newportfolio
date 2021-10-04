import { Flex, Heading, Box } from '@chakra-ui/layout';

export const Home = () => {
  const styleWrap = {
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div style={styleWrap}>
      <Box>
        <Heading
          as="h1"
          mt="100px"
          borderBottom="3px solid"
          fontSize={{ base: '35px', md: '70px' }}
        >
          PORTFOLIO
        </Heading>

        <Flex
          as="h1"
          mt="20px"
          borderBottom="3px solid"
          fontSize={{ base: '20px', md: '40px' }}
        >
          KOSUKE YAMAUCHI
        </Flex>
      </Box>
    </div>
  );
};

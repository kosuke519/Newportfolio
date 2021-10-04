import { Flex } from '@chakra-ui/layout';

import { AboutInfo } from '../organisms/About/AboutInfo';
import cats from '../Images/cats.jpg';
console.log(cats);
export const About = () => {
  return (
    <>
      <Flex
        justify="center"
        fontSize={{ base: '14px', md: '30px' }}
        textAlign="center"
        as="h1"
        mt="40px"
      >
        ABOUT
      </Flex>

      <AboutInfo />
    </>
  );
};

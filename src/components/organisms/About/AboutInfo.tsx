import {
  Flex,
  Stack,
  VStack,
  StackDivider,
  Image,
  Box,
  Text,
  Link,
} from '@chakra-ui/react';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';
import { SiTypescript, SiMysql } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { VFC } from 'react';

export const AboutInfo: VFC = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      fontSize={{ base: 'sm', md: '22px' }}
      p="50px"
    >
      <VStack
        ml={{ base: '0px', md: '100px' }}
        divider={<StackDivider borderColor="black" />}
        spacing="30px"
      >
        <Image
          borderRadius="full"
          w={{ base: '150px', md: '700px' }}
          src="/static/media/cats.865452be.jpg"
        />
        <Flex>
          <Box borderRadius="30px" p="20px">
            <Text>
              Githubアカウントは
              <Link
                color="#4682b4"
                _hover={{ cursor: 'pointer', opacity: '0.5' }}
                href="https://github.com/kosuke519"
              >
                こちら
              </Link>
            </Text>
          </Box>
        </Flex>
      </VStack>
      <Box m={{ base: ' 30px 0 0 0 ', md: '30px 130px 0px 150px' }}>
        <Stack>
          <Text borderBottom="2.5px solid">Profile</Text>
          <Text
            lineHeight={{ base: '20px', md: '40px' }}
            fontFamily="yu Gothic"
          >
            氏名:山内滉介(やまうちこうすけ)
            <br />
            居住地：神奈川県
            <br />
            ポートフォリオを拝見頂きありがとうございます。半年ほど勤めたホテルの仕事を辞め、WEBエンジニアとして働くために
            主にフロントエンド、バックエンドを勉強しております。
          </Text>
          <Text
            fontSize={{ base: 'sm', md: '22px' }}
            borderBottom="2.5px solid"
          >
            Skill
          </Text>
          <Flex flexWrap="wrap" justify="space-around">
            <Stack>
              <Box ml="7px">
                <FaHtml5 size="40px" />
              </Box>
              <Flex>HTML</Flex>
            </Stack>
            <Stack>
              <FaCss3Alt size="40px" />
              <Flex justify="center">CSS</Flex>
            </Stack>
            <Stack>
              <Box ml="10px">
                <FaReact size="40px" />
              </Box>
              <Flex>React</Flex>
            </Stack>
            <Stack>
              <Box ml="30px">
                <SiTypescript size="40px" />
              </Box>
              <Flex>Typescript</Flex>
            </Stack>
            <Stack>
              <Box ml="30px">
                <IoLogoJavascript size="40px" />
              </Box>
              <Flex>Javascript</Flex>
            </Stack>
            <Stack>
              <Box ml="20px">
                <FaNodeJs size="40px" />
              </Box>
              <Flex>Node.js</Flex>
            </Stack>
            <Stack>
              <Box ml="15px">
                <SiMysql size="40px" />
              </Box>
              <Flex>MySQL</Flex>
            </Stack>
          </Flex>
          <Text
            fontSize={{ base: 'sm', md: '22px' }}
            borderBottom="2.5px solid"
          >
            SNS
          </Text>
          <Stack>
            <Box as="a" w="0">
              <FaGithub size="40px" />
            </Box>
            <Text>Github</Text>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};

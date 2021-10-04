import { Flex, Link, Stack } from '@chakra-ui/layout';
import { memo, useCallback, VFC } from 'react';
import { useHistory } from 'react-router-dom';
import { SideIconButton } from '../../atoms/button/SideIconButton';

export const Header: VFC = memo(() => {
  const history = useHistory();

  const onClickHome = useCallback(() => history.push('/'), [history]);
  const onClickAbout = useCallback(() => history.push('/about'), [history]);
  const onClickContact = useCallback(() => history.push('/contact'), [history]);
  const onClickWorks = useCallback(() => history.push('/works'), [history]);

  return (
    <>
      <Flex
        as="nav"
        w="100%"
        bg="white"
        padding={{ base: 3, md: 4 }}
        justify="flex-end"
      >
        <Flex
          flexGrow={2}
          fontSize="20px"
          display={{ base: 'none', md: 'flex' }}
          m={{ base: '0px', md: '20px 0px 0px 100px' }}
        >
          <Link mr={4} onClick={onClickHome}>
            HOME
          </Link>
          <Link mr={4} onClick={onClickWorks}>
            WORK
          </Link>
          <Link mr={4} onClick={onClickAbout}>
            ABOUT
          </Link>
          <Link mr={4} onClick={onClickContact}>
            CONTACT
          </Link>
        </Flex>
        <Stack spacing="0">
          <SideIconButton />

          <Flex display={{ base: 'Flex', md: 'none' }} fontSize="13px">
            MENU
          </Flex>
        </Stack>
      </Flex>
    </>
  );
});

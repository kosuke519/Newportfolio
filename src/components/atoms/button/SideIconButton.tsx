import { IconButton } from '@chakra-ui/button';
import { memo, VFC, useCallback } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
export const SideIconButton: VFC = memo(() => {
  const history = useHistory();

  const onClickHome = useCallback(() => history.push('/'), [history]);
  const onClickAbout = useCallback(() => history.push('/about'), [history]);
  const onClickContact = useCallback(() => history.push('/contact'), [history]);
  const onClickWorks = useCallback(() => history.push('/works'), [history]);
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="メニューボタン"
        icon={<HamburgerIcon />}
        size="sm"
        valiant="unstyled"
        display={{ base: 'block', md: 'none' }}
      />
      <MenuList>
        <MenuItem onClick={onClickHome}>HOME</MenuItem>
        <MenuItem onClick={onClickWorks}>Work</MenuItem>
        <MenuItem onClick={onClickAbout}>ABOUT</MenuItem>
        <MenuItem onClick={onClickContact}>CONTACT</MenuItem>
      </MenuList>
    </Menu>
  );
});

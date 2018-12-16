import React from 'react';

import UserIcon from 'react-icons/lib/ti/user';
import ExitIcon from 'react-icons/lib/md/exit-to-app';
import FolderIcon from 'react-icons/lib/md/folder';
import SettingsIcon from 'react-icons/lib/md/settings';
import { profileUrl, patronUrl, curatorUrl } from 'common/utils/url-generator';
import PatronBadge from 'common/utils/badges/PatronBadge';

import { Container, Item, Icon, Anchor } from './elements';

function Menu({
  username,
  curator,
  openPreferences,
  openStorageManagement,
  signOut,
}) {
  return (
    <Container>
      <Anchor to={profileUrl(username)}>
        <Item>
          <Icon>
            <UserIcon />
          </Icon>
          My Profile
        </Item>
      </Anchor>
      <Item onClick={openStorageManagement}>
        <Icon>
          <FolderIcon />
        </Icon>
        Storage Management
      </Item>
      <Item onClick={openPreferences}>
        <Icon>
          <SettingsIcon />
        </Icon>
        Preferences
      </Item>
      {curator && (
        <Anchor to={curatorUrl()}>
          <Item>
            <Icon
              css={`
                margin-right: 7px;
              `}
            >
              <span role="img" aria-label="Star">
                ✨
              </span>
            </Icon>
            Curator Page
          </Item>
        </Anchor>
      )}
      <Anchor to={patronUrl()}>
        <Item>
          <Icon>
            <PatronBadge
              css={`
                width: 24px;
                margin: -6px -5px;
              `}
              size={24}
            />
          </Icon>
          Patron Page
        </Item>
      </Anchor>

      <Item onClick={signOut}>
        <Icon>
          <ExitIcon />
        </Icon>
        Sign out
      </Item>
    </Container>
  );
}

export default Menu;

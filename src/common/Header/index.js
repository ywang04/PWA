import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper, BackContainer, HeaderTitle, BackIcon } from './styles';

const Header = memo(({ title, onBack }) => {
  return (
    <HeaderWrapper>
      <BackContainer onClick={onBack}>
        <BackIcon>
          <polyline points={'25,13 16,21 25,29'} />
        </BackIcon>
      </BackContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderWrapper>
  );
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Header;

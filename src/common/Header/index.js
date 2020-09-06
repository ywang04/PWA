import React, { memo } from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

const Header = memo(({ title, onBack }) => {
  return (
    <Styles.HeaderWrapper>
      <Styles.HeaderContainer>
        <Styles.BackContainer onClick={onBack}>
          <Styles.BackIcon>
            <polyline points={'25,13 16,21 25,29'} />
          </Styles.BackIcon>
        </Styles.BackContainer>
        <Styles.HeaderTitle>{title}</Styles.HeaderTitle>
      </Styles.HeaderContainer>
    </Styles.HeaderWrapper>
  );
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Header;

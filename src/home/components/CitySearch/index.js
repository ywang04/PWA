import React, { useState } from 'react';
import classnames from 'classnames';
import { BackIcon, BackContainer } from '../../../common/Header/styles';
import * as Styles from './styles';

const CitySearch = ({ updateCitySelectorVisible }) => {
  const [searchInput, setSearchInput] = useState('');
  const handleSearch = e => setSearchInput(e.target.value.trim());
  const handleCleanSearch = () => setSearchInput('');
  const handleBack = () => updateCitySelectorVisible(true);
  return (
    <Styles.CitySearchContainer>
      <BackContainer onClick={handleBack}>
        <BackIcon>
          <polyline points={'25,13 16,21 25,29'} />
        </BackIcon>
      </BackContainer>
      <Styles.SearchInputContainer>
        <Styles.SearchInput
          value={searchInput}
          type="text"
          placeholder="城市、车站的中文或拼音"
          onChange={handleSearch}
        />
      </Styles.SearchInputContainer>
      <Styles.SearchCleanButton
        onClick={handleCleanSearch}
        className={classnames({ hidden: searchInput.length === 0 })}
      >
        &#xf063;
      </Styles.SearchCleanButton>
    </Styles.CitySearchContainer>
  );
};

export default CitySearch;

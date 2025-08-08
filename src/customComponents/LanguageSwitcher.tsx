import React from 'react'
import { Select } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const LanguageSwitcher = () => {
  return (
    <div>
        <Select
          defaultValue="EN"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: 'en', label: 'EN' },
            { value: 'ru', label: 'RU' },
            { value: 'uz', label: 'UZ' },
            { value: 'hu', label: 'HU' },
          ]}
        />
    </div>
  )
}

export default LanguageSwitcher
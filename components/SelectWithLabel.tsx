import React from 'react';
import Image from 'next/image';
import { pgdown } from '../lib/images';

type InputProps = {
  value: string;
  setValue: any;
  title: string;

  defaults?: string;
  listData?: any[];
};

const SelectWithLabel: React.FC<InputProps> = ({ value, setValue, title, defaults, listData }) => {
  return (
    <div className={'grid grid-cols-4'}>
      {title && <p className="whitespace-nowrap my-auto">{title}</p>}
      <div className="flex relative w-full col-span-3">
        <select
          className="block appearance-none w-full bg-white dark:bg-gray-800 border px-2 py-2 pr-8 rounded-lg focus:outline-none focus:shadow-outline"
          onChange={e => {
            setValue(e.target.value);
          }}
          value={value ? value : ''}>
          <option value={''}>{defaults}</option>
          {listData?.map(data => (
            <option key={data.id} value={data.name}>
              {data.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <Image src={pgdown} alt="dp" className="m-auto"></Image>
        </div>
      </div>
    </div>
  );
};

export default SelectWithLabel;

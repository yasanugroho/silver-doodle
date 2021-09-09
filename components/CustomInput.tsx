import React from 'react';

import { _ } from '../lib/i18n';
import { useRouter } from 'next/router';

type InputProps = {
  value: string;
  setValue: any;
  title: string;
  type?: boolean;
};

const CustomInput: React.FC<InputProps> = ({ value, setValue, title, type }) => {
  const router = useRouter();
  const { locale: l } = router;
  return (
    <div className={`grid grid-cols-4 ${type ? 'items-start' : 'items-center'}`}>
      <p className="whitespace-nowrap">{title}</p>
      {type ? (
        <textarea
          className="focus:outline-none border rounded-lg py-1 px-2 w-full col-span-3 h-[150px]"
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}></textarea>
      ) : (
        <input
          className="focus:outline-none border rounded-lg py-1 px-2 w-full col-span-3"
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}></input>
      )}
    </div>
  );
};

export default CustomInput;

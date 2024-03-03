'use client';

import { useState } from 'react';
import Image from 'next/image';
import Input from '@/components/input/Input';
import SelectOption from '@/components/input/Select';
import Button from '@/components/input/Button';
import CustomTable from '@/components/input/Table';
import arw from '@/assets/svg/arrow-right-1.svg';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleSelect = (option) => {
    setSelectedOption(option.label);
  };
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handleEdit = (row) => {
    console.log('Edit:', row);
  };

  const handleDelete = (row) => {
    console.log('Delete:', row);
  };
  const headers1 = [
    {
      label: 'Transfer From',
      style: 'w-1/4',
      target: 'from',
    },
    {
      label: 'Transfer To',
      style: 'w-1/4',
      target: 'to',
    },
    {
      label: 'Amount',
      style: 'w-1/4',
      target: 'amount',
      tdIcon: <Image src={arw} alt="" />,
    },
    {
      label: 'Action',
      style: 'w-1/4',
      target: 'action',
      action: [
        { label: 'Edit', onClick: (row) => handleEdit(row), style: 'text-blue-300' },
        { label: 'Delete', onClick: (row) => handleDelete(row), style: 'text-pRed' },
      ],
    },
  ];

  const data1 = [{ to: 'Nagad', from: 'Bkash', amount: 200 }];

  return (
    <main className="p-4">
      <Input type="text" className="max-h-[48px] max-w-[400px]" />
      <br />
      <SelectOption
        options={options}
        label="Select"
        value={selectedOption}
        onChange={handleSelect}
        placeholder="Select an option"
        className="max-h-[48px] max-w-[400px]"
        labelClass="font-bold"
        selectClass=""
      />
      <br />
      <Button
        size="small"
        color="danger"
        iconLeft={'>>'}
        onClick={() => console.log('Small primary button clicked')}
      >
        Small Primary Button
      </Button>
      <br />
      {/* <CustomTable headers={headers} data={data} /> */}
      <br />
      <CustomTable
        headers={headers1}
        data={data1}
        enableSearch
        enablePagination
        tableClass={'rounded-md p-4 shadow-md'}
      />
    </main>
  );
};

export default Home;

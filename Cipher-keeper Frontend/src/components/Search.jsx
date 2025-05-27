import React from 'react'
import NavBar from './NavBar'
import {
  Input,
  Select,
} from 'antd';
const { Option } = Select;

const Search = () => {
  return (
    <div className="w-[90%] mt-[2.2rem] mr-[4%] font-poppins">
        <NavBar />
        <div className="mt-[4%]">
        <Input.Group style={{
            boxShadow: '5px 5px 10px rgba(211, 211, 211, 0.5)',
        }}>
            <Select defaultValue="Categories" style={{borderRadius: '18px', width: '20%'}}>
                <Option value="one">Category-1</Option>
                <Option value="two">Category-2</Option>
            </Select>
            <Input.Search
                allowClear
                style={{
                borderRadius: '18px',
                width: '80%',
            }}
                placeholder="Create an invoice"
            />
        </Input.Group>
        </div>
    </div>
  )
}

export default Search
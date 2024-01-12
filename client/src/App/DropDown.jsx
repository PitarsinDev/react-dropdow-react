import React from 'react'
import { Link } from 'react-router-dom'

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function DropDown() {

    const options = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two', className: 'myOptionClassName' },
        {
         type: 'group', name: 'group1', items: [
           { value: 'three', label: 'Three', className: 'myOptionClassName' },
           { value: 'four', label: 'Four' }
         ]
        },
        {
         type: 'group', name: 'group2', items: [
           { value: 'five', label: 'Five' },
           { value: 'six', label: 'Six' }
         ]
        }
      ];
    const defaultOption = options[0]; // ตัวเลือกเริ่มต้น

  return (
    <div>
        <div className='flex justify-between p-5'>
            <div>
                <Link to="/">
                    LOGO
                </Link>
            </div>
            <div className='flex gap-5'>
                <Link to="/">
                    Home
                </Link>
                <Link to="/services">
                    Services
                </Link>
                <Link to="/about">
                    About
                </Link>
                <Dropdown   
                    options={options}
                    value={defaultOption}
                    placeholder="เลือกตัวเลือก"
                />
            </div>
        </div>
    </div>
  )
}

export default DropDown
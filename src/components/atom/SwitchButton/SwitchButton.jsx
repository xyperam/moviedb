import React, { useState } from 'react'

const SwitchButton = ({ isChecked, onToggle }) => {
  
  return (
    <>
      <label className='themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1'>
        <input
         type='checkbox'
          className='sr-only'
          checked={isChecked}
          onChange={onToggle}
        />
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            !isChecked ? 'text-primary bg-[#f4f7ff]' : 'text-body-color'
          }`}
        >
          Backdrops
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            isChecked ? 'text-primary bg-[#f4f7ff]' : 'text-body-color'
          }`}
        >
            Posters
        </span>
      </label>
    </>
  )
}

export default SwitchButton
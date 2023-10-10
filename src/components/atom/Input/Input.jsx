import React from 'react'

const Input = ({...rest}) => {
  return (
     <input
     className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300"
        {...rest}
        />
  )
}

export default Input;
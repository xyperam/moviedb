import React from 'react'

const Button = ({title,...rest}) => {
  return (
    <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    {...rest}
    >{title}</button>
  )
}

export default Button;
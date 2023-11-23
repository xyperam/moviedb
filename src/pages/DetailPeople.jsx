import React from 'react'
import { useParams } from 'react-router-dom'
function DetailPeople() {
  const params = useParams();
    console.log(params)
    return (
    <div>
      detail people
    </div>
  )
}

export default DetailPeople

import React from 'react'
import { useParams } from 'react-router-dom'

export default function Bai1() {
   
    // const param =useParams()
    const { id }=useParams();
   
  return (
    <div>Bai1
        <p>id: {id}</p>
    </div>
  )
}

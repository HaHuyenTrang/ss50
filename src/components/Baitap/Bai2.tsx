import React from 'react'
import { useParams } from 'react-router-dom'

export default function Bai2() {
    const {name} = useParams();
  return (
    <div>Bai2
        <p>name: {name}</p>
    </div>
  )
}

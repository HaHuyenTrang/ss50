import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Bai3() {
  const [searchTerm, setSearchTerm] = useState('');
  const { id } = useParams();
  // const history = useHistory();
    const handleInputChange = (event:any) => {
        setSearchTerm(event.target.value);
      };
  
    const handleClick = () => {
      // Update the URL with the search term
      // history.push(`/Bai3/${id}?search=${searchTerm}`);
    };
  return (
    <div>Bai3
        <input type="text" placeholder='Nhập từ khóa tìm kiếm?' value={searchTerm}
        onChange={handleInputChange} />
        <button onClick={handleClick}>Tìm kiếm</button>
    </div>
  )
}

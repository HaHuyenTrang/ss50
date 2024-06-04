import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Product() {
    let product=[
        {
            id:1,
            name: "mèn mén",
            price:5,
            image: "https://danviet.mediacdn.vn/upload/2-2016/images/2016-04-07/1460011383-dac-san-mong4.jpg"
            // img: <img src="https://danviet.mediacdn.vn/upload/2-2016/images/2016-04-07/1460011383-dac-san-mong4.jpg" alt="" />
        },
        {
            id:1,
            name: "mèn mén",
            price:5,
            image: "https://danviet.mediacdn.vn/upload/2-2016/images/2016-04-07/1460011383-dac-san-mong4.jpg"
            // img: <img src="https://danviet.mediacdn.vn/upload/2-2016/images/2016-04-07/1460011383-dac-san-mong4.jpg" alt="" />
        },
        {
            id:1,
            name: "mèn mén",
            price:5,
            image: "https://danviet.mediacdn.vn/upload/2-2016/images/2016-04-07/1460011383-dac-san-mong4.jpg"
            // img: <img src="" alt="" />
        },
    ]
    const navigate = useNavigate();
    const handleclick =(id:number)=>{
        navigate(`/productDetail/${id}`)
    }
  return (
    <div>Product
        {product.map((item)=>{
            return(
                <div>
                    <p>id {item.id}</p>
                    <p>tên {item.name}</p>
                    <p>giá {item.price}</p>
                    <p> <img src={item.image} alt="" /></p>
                    <button onClick={()=>handleclick(item.id)}>chi tiết</button>
                </div>
            )
        })}
    </div>
  )
}

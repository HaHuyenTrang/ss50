import React from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
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
    const param = useParams();
    console.log(param);
    const id =Number(param.productId);
    let productDetail = product.find((item)=>{
        return item.id === id;
    })
    
  return (
    <div>ProductDetail
        <p>
            name: {productDetail?.name}
        </p>
        <p>
            giá: {productDetail?.price}
        </p>
        <p>
            <img src= {productDetail?.image} alt="" />
           
        </p>
    </div>
  )
}

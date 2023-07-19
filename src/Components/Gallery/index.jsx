import React, {useState} from "react";
import './style.css';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import h from "../../assets/h.jpg";

const images = [
  h,
  "https://picsum.photos/200/300",
  "https://picsum.photos/300/300",
  h,
  "https://picsum.photos/3000/3000",
  "https://picsum.photos/3000/3000",
  "https://picsum.photos/300/500",
  "https://picsum.photos/3000/3000",
  "https://picsum.photos/300/300",
  "https://picsum.photos/300/300",
];

const index = () => {
  const [data,setData] = useState({img:'',i:0});

  const viewImage = (img , i )=>{
    setData({img,i});
  }

  const imgAction = (action) =>{
    let i = data.i;
    if (action == 'next') {
      setData({img:images[i + 1], i : i+1});
    } else if (action == 'prev') {
      setData({img:images[i - 1], i : i-1});
    } else if (!action) {
      setData({img:'',i:0});
    }
  }

  return (
    <div >
      {
        data.img ? (
          <div className="img-displayer">
            <button style={{position:'absolute',right:'10px',top:'10px'}} onClick={()=>imgAction()}>X</button>
            <button onClick={()=>imgAction('prev')}>prev</button>
            <img  src={data.img} style={{width:'auto', maxWidth:'90%', maxHeight:'90%'}} />
            <button onClick={()=>imgAction('next')}>next</button>
          </div>
        ) : null
      }
      <div style={{padding:'15px'}}> 
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block" }}
                alt=""
                onClick={()=> viewImage(image,i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default index;

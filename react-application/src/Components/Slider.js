import React,{useState}from "react";
function Slider() {
  const array=["http://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg","https://cdn.mos.cms.futurecdn.net/k9Md6R78D8aN4tbGDRWUSE.jpg","https://i.insider.com/58287139691e8849528b5fe3?width=1000&format=jpeg&auto=webp","https://5.imimg.com/data5/XC/NP/NL/SELLER-874584/dell-xps-13-9370-500x500.jpg","https://cdn.vox-cdn.com/thumbor/lRwetR_dg8WBLFIUPzY7l0QYCaI=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22411713/cfaulkner_20210326_4491_0006.jpg"]
  const [i, seti] = useState(0)
  const Next=()=>{
   (i>=0 && i< array.length-1)?seti(i+1):alert("You are on last image")
}
  const Pre=()=>{
    (i===0)?alert("You are on first image"):seti(i-1)
 }
  return (
    <>
    <h1 style={{textAlign: "center"}}>Laptop's Image: {i+1}</h1><hr style={{width: "50%"}}/>
    <div id="carouselExampleControls" style={{color:"black",opacity:"0.9",height:"500px",}} className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active container">
      {console.log(array[i])}
      <img className="d-block w-100 img-fluid"  src={array[i]} alt="First slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
  <i  onClick={Pre} style={{color:"black", fontSize:"35px", marginRight: "10px"}} className="fas fa-arrow-circle-left"></i>
  </a>
  <a className="carousel-control-next"  href="#carouselExampleControls" role="button" data-slide="next">
   <i onClick={Next} style={{color:"black", fontSize:"35px", marginLeft: "10px"}} className="fas fa-arrow-circle-right"></i>
  </a>
</div>
</>
  );
}

export default Slider;

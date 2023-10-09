// import logo from './logo.svg';
import './App.css';
import prodect_img from './assets/image/png/prodect_img.png'
import img1 from './assets/image/png/img1.png'
 import img2 from './assets/image/png/img2.png'
 import img3 from './assets/image/png/img3.png'
 import img4 from './assets/image/png/img4.png'

function App() {
  return (
    <div className="App">
      <section className="pb">
        <div className="container">
          <h1 className="product_font d-flex justify-center padding-bottom"> Featured Product </h1>
          < div className="row" >
            < div className = "col-12 col-xl-5 text-center pos_relative " >
              < img className="width height" src={prodect_img} alt="" />
              < p className = "pos_ab text_font text-center" > Explore More
              Product </p>
            </div>
            < div className = "col-12 col-xl-7 pt_top align_center flex-column d-flex justify-center" >
              <div>
                 < div className = "card margin_bottom " >
                <img className="w_100 padding_left" src={img3} alt=""/> 
                <p className="font_size pt"> Concetti Di -  Lusso ALESANDRDO Luxury
                Turkish Spa Towels and ganic Bamboo
                  Robes 12 PC set </p>
                < div className = "d-flex align_center padding_left space-between" >
                  <p className="font_size1"> $169 .99 </p>
                  <p className="fs_12"> $199 .99 </p>
                  <button className = "button padding"> ADD CART </button>
              </div>
              </div>
               < div className = "card mb" >
                <img className="w_100 padding_left" src={img1} alt=""/> 
                <p className="font_size pt"> Concetti Di -  Lusso ALESANDRDO Luxury
                Turkish Spa Towels and ganic Bamboo
                  Robes 12 PC set </p>
                < div className = "d-flex align_center padding_left space-between" >
                  <p className="font_size1"> $159.99 </p>
                  <p className="fs_12"> $199 .99 </p>
                  <button className = "button padding"> ADD CART </button>
              </div>
              </div>
             </div>
              <div>
                  < div className = "card  margin_left margin_bottom" >
                <img className="w_100 padding_left  " src={img2} alt=""/> 
                < p className = "font_size pt" > Concetti Di - Lusso CAPPY Organic
                Turkish Cotton - Set of 4 in Gift Box  </p>
                < div className = "d-flex align_center padding_left space-between" >
                  <p className="font_size1"> $59.99 </p>
                  <p className="fs_12"> $199 .99 </p>
                  <button className = "button padding"> ADD CART </button>
              </div>
              </div>
               < div className = "card margin_left" >
                <img className="w_100 padding_left" src={img4} alt=""/> 
                <p className="font_size pt"> Concetti Di -  Lusso ALESANDRDO Luxury
                Turkish Spa Towels and ganic Bamboo
                  Robes 12 PC set </p>
                < div className = "d-flex align_center padding_left space-between" >
                  <p className="font_size1"> $59.99 </p>
                  <p className="fs_12"> $199 .99 </p>
                  <button className = "button padding"> ADD CART </button>
              </div>
              </div>
             </div>
            </div>
         </div>
        </div>
      </section>
    </div>
  );
}
export default App;

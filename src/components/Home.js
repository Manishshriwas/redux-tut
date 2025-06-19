import React from 'react';
function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img src="https://www.shutterstock.com/image-vector/shopping-cart-icon-flat-design-600nw-2439328011.jpg"></img>
      </div>
      <h1>Home componet</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://media.istockphoto.com/id/1569559602/vector/3d-realistic-high-quality-smartphone-mockup-with-isolated-background-smart-phone-mockup.jpg?s=612x612&w=0&k=20&c=pQhO25h_Pqo09nscmQadYSFSt9jYhg-ERMN46K0uLrU="></img>
        </div>
           <div className="text-wrapper item">
            <span>
              I-Phone
            </span>
            <span>
              Price:$1000.00
            </span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to cart</button>
        </div>

      </div>
    </div>
  );
  
}    

export default Home;
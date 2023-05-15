import React from "react";

function Header() {
  return (
   //header image
    <div className="container-fluid"
    style={{
      height: "30vh",
      backgroundImage: `url("banner.jpg")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: 
      "cover",
      backgroundPosition: "cover",
      position: "relative",
      marginTop: "0",
    }}
    >
      {/* <div className="row">
        <div className="col-12">
          <img 
            src="banner.jpg"
            alt="rick and morty"
            className="img-fluid "
          />
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default Header;

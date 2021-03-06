import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import HomePagePuppy from "./../../../assets/images/UI Images/HomePagePuppy.jpeg";

const Jumbotron = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-blue text-center py-5 px-4 my-5" style={{ backgroundImage: `url(http://streetpaws.org/wp-content/uploads/2018/01/16-3018-May-Banner-Puppy.jpg)` }}>
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 text-blue font-weight-bold">Doodle Belle Puppy</MDBCardTitle>
                <p className="pt-4 mx-5 mb-5">A place where every person can find a best friend
                </p>
                <MDBBtn outline color="blue" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon>About Us</MDBBtn>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Jumbotron;
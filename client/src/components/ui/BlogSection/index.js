import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import LabStud from "../../../assets/images/Past Litter/LabStud.jpg";
import RiverLab from "../../../assets/images/Past Litter/RiverLabradoodle3.jpeg";
import './blog.css';

const BlogSection = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Our Mission
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          I have chosen to become a breeder of the dogs that people want to have as part of their families. 
          Responsible health tested, individually raised, trained, socialized, and nurtured family members.
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-0" hover waves>
              <img
                className="img-fluid"
                src={LabStud}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="blue-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="dog" className="pr-2" />
                Breeding
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Breeding Practices</strong>
            </h3>
            <p>
             We believe the only way to put a disreputable breeder, puppy mill, or fake rescue out of business is to make available to the marketplace a far superior product.
            </p>
            <MDBBtn color="blue" size="md" className="waves-light ">
              Read more about us
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="blue-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="home" className="pr-2" />
                Guardian Home
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Guardian Home</strong>
            </h3>
            <p>
              A guardian home provides a permanent stable home to dogs that are part of our breeding program.
            </p>
            <MDBBtn
              color="blue"
              size="md"
              className="mb-lg-0 mb-4 waves-light"
            >
              Read more about Guardian Home
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={RiverLab}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="blue-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="suitcase" className="pr-2" />
                Shop
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Shop Today</strong>
            </h3>
            <p>
             Find your best friend from our new litters 
            </p>
            <MDBBtn color="blue" size="md" className="waves-light ">
              Shop
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default BlogSection;
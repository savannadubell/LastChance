
import React, {Component} from "react";
import { MDBRow, MDBCol, MDBContainer} from "mdbreact";
import Jumbotron from "./../../components/ui/Jumbotron/index";
import BlogSection from "./../../components/ui/BlogSection/index";

class Home extends Component {

render () {
    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol size ="md-12">
                    <Jumbotron></Jumbotron>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size="md-12">
                    <BlogSection>
                    </BlogSection>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
}

export default Home; 
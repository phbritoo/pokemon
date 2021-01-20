import React from "react";
import { MDBIcon, MDBFooter, MDBRow } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBRow>
      <MDBFooter className="font-small ">
        <div className="text-center font-weight-bold black-text">
          &copy; {new Date().getFullYear()} Copyright:
            <a href="https://www.linkedin.com/in/phbritoo/" className="black-text">
            <></>
            <MDBIcon fab icon="linkedin-in" className="p-3 black-text" />
             Desenvolvido por Paulo Brito
            </a>
        </div>
      </MDBFooter>
    </MDBRow>
  );
}

export default FooterPage;
import NavBar from "../components/NavBar";
import pic4 from "../assets/images/plano-isd-academy-high-school-plano-tx-5.webp";
import PDFViewer from "../components/PDFViewer";
import pdf1 from "../assets/docs/NHS Application.pdf";

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Membership = () => {
  return (
    <>
      <NavBar page="membership" />
      <div className="custom-bg">
        <div className="row align-items-center text-white ms-5">
          <div className="col-md-6 text-start">
            <h1 className="display-1">
              Membership & <br /> Registration
            </h1>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={pic4}
              alt="Registration visual"
              className="img-fluid fade-in"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex flex-column">
        <h1 className="display-3 align-self-center py-5">Registration</h1>
        <div className="container mt-5 border-bottom border-dark border-3">
          <div className="row">
            <div className="col-md-6">
              <h1>Application Proccess</h1>
              <p></p>
              <ol>
                <li className="mb-4 fs-4">
                  Complete the following form:
                  <div className="mt-2">
                    <div className="pdf-container border roudned d-inline-block ">
                      <PDFViewer file="/NHS Application.pdf" />
                    </div>
                    <div className="mt-3">
                      <a
                        className="text-decoration-none text-reset"
                        href={pdf1}
                        download="nhs-application.pdf"
                      >
                        <button
                          className="btn btn-secondary btn-lg d-block mt-3"
                          style={{ width: "350px" }}
                        >
                          Download
                        </button>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="mb-4 fs-4">
                  Email the form to{" "}
                  <a href="mailto:shannon.carroll@pisd.edu">Mrs. Carroll</a>{" "}
                  before February 6th
                </li>
                <li className="mb-4 fs-4">Pay NHS dues online on Rycor </li>
              </ol>
            </div>
            <div className="col-md-6">
              <h1>Requirements</h1>
              <ul>
                <li className="mb-5 fs-4">
                  Minimum of 15 hours of community service per semester
                </li>
                <li className="mb-5 fs-4">
                  Maximum of 10 of those hours can be from school events
                </li>
                <li className="mb-5 fs-4">
                  Mandatory attendence of meetings unless excused
                </li>
                <li className="mb-5 fs-4">
                  Have a GPA over <mark>3.7</mark>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center">
        <section className="py-5 text-center">
          <h1 className="display-2 m-0">Membership</h1>
          <h2 className="display-4 m-0">How do I become a member?</h2>
        </section>
      </div>
    </>
  );
};

export default Membership;

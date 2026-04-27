import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../components/NavBar";
import pic1 from "../assets/images/processed-4D01AF52-E32C-4A78-A47F-55AA2B1C1CAA.jpeg";
import pic2 from "../assets/images/processed-918DB7A9-6446-474F-8C54-8D711614A23F.jpeg";
import pic3 from "../assets/images/IMG_20250918_153341.jpg";

const Home = () => {
  return (
    <>
      <NavBar page="home" />
      <div>
        <div className="parallax-section d-flex align-items-center justify-content-center">
          <div className="text-center text-white">
            <h1 className="display-3 fw-bold">Plano ISD Academy High School</h1>
            <p className="lead">National Honor Society</p>
          </div>
        </div>
        <div className="container border-bottom border-dark border-3 p-4 w-100">
          <h2 className="mb-3">Important Information</h2>
          <div className="row">
            <div className="col-md-6">
              <p>
                The National Honor Society (NHS) recognizes students who excel
                in:
              </p>
              <ul>
                <li>Scholarship (academic achievement)</li>
                <li>Leadership</li>
                <li>Service (community involvement)</li>
                <li>Character</li>
              </ul>
              <p>
                NHS is not just an honor roll—it's a commitment to Leadership
                and service in the school and community
              </p>
              <br></br>
              <figure>
                <blockquote className="blockquote">
                  <p>
                    "Membership in the National Honor Society is not a reward
                    for past achievement, but a call to continued excellence."
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer py-3">
                  Dr. Edward Rynearson,{" "}
                  <cite title="Source Qualification">Founder of NHS</cite>
                </figcaption>
              </figure>
            </div>
            <div className="col-md-6">
              <p>
                <em>Academic Standing</em>
              </p>
              <ul>
                <li>
                  Students must maintain a GPA of <mark>3.5 or higher</mark>
                </li>
                <li>Must be in good academic standing: i.e., passing</li>
              </ul>
              <br></br>
              <p>
                <em>School Standing</em>
              </p>
              <ul>
                <li>Must be in good disciplinary standing</li>
                <li>No serious behavior or academic integrity violations</li>
              </ul>
              <br></br>
              <p>
                <em>Invitation Only</em>
              </p>
              <ul>
                <li>
                  Students are usually invited based on <u>GPA eligibility</u>{" "}
                  after semester grades
                </li>
                <li>Eligible students are then allowed to apply</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image carousel */}
        <div className="container w-50 mx-auto">
          <div
            id="homeCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#homeCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#homeCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#homeCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={pic1}
                  className="d-block w-100 object-fit-cover"
                  style={{ height: "400px" }}
                  alt="group picture 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={pic2}
                  className="d-block w-100 object-fit-cover"
                  style={{ height: "400px" }}
                  alt="group picture 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={pic3}
                  className="d-block w-100 object-fit-cover"
                  style={{ height: "400px" }}
                  alt="group picture 3"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="container text-center border-top border-dark border-3 p-5">
          <h1 className="mb-3">Contact Us</h1>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <p>
                    <strong>Advisor</strong>
                  </p>
                </th>
                <th scope="row">
                  <p>Shannon Carroll</p>
                </th>
                <th scope="row">
                  <a href="mailto:shannon.carroll@pisd.edu">
                    shannon.carroll@pisd.edu
                  </a>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;

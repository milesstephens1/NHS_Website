import NavBar from "../components/NavBar";
import pic4 from "../assets/pexels-less-rock-14960246.jpg";

const Membership = () => {
  return (
    <div>
      <NavBar page="membership" />
      <div className="custom-bg py-5">
        <div className="row align-items-center text-white ms-5">
          <div className="col-md-6 text-start">
            <h1 className="display-1">Registration</h1>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={pic4}
              alt="Registration visual"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;

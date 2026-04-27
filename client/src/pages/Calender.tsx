import NavBar from "../components/NavBar";
import CalenderApp from "../components/CalenderApp";

const Calender = () => {
  return (
    <>
      <NavBar page="calender" />
      <div className="container text-align-left mt-5">
        <h1>2025-2026 NHS Calender</h1>
      </div>
      <CalenderApp />
      <div>
        <h3 className="container text-center mt-5">
          For Further Information Information, Please Join the{" "}
          <a href="https://classroom.google.com/c/ODEyMDk0MzQ1Njk5?cjc=lbxgxrhe">
            Google Classroom
          </a>
        </h3>
      </div>
    </>
  );
};

export default Calender;

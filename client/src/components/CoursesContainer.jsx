import CoursesItem from "./CoursesItem";
import courses from "../data.js";

const CoursesContainer = () => {
  return (
    <div className="courses-area section-padding40 fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="section-tittle text-center mb-55">
              <h2>Our featured courses</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {courses.map((item) => (
            <CoursesItem course={item} />
          ))}
          {/* <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-tittle text-center mt-40">
                <a href="#" className="border-btn">
                  Load More
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CoursesContainer;

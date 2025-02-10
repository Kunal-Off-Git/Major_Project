import { Link } from "react-router-dom";
const CoursesItem = ({ course }) => {
  return (
    <div className="col-6">
      <div className="properties properties2 mb-30">
        <div className="properties__card">
          <div className="properties__img overlay1">
            <a href="#">
              <img src={course.imgUrl} alt="" />
            </a>
          </div>
          <div className="properties__caption">
            <p>{course.tag}</p>
            <h3>
              <a href="#">{course.name}</a>
            </h3>
            <p>{course.description}</p>
            <div className="properties__footer d-flex justify-content-between align-items-center">
              <div className="restaurant-name">
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half" />
                </div>
                <p>
                  <span>(4.5)</span> based on 120
                </p>
              </div>
              <div className="price">
                <span>{course.price}</span>
              </div>
            </div>
            <Link
              to={`/courses/${course.id}`}
              className="border-btn border-btn2"
            >
              Find out more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesItem;

import React, { useState } from 'react';
import '../assets/css/Schedule.css'; // Import your CSS file for styling

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Define test and assignment dates
  const testDates = [
    { date: new Date(2025, 1, 25), title: "Java Test" }, // February 25, 2025
    { date: new Date(2025, 1, 27), title: "OOPs Test" }, // February 27, 2025
    { date: new Date(2025, 2, 2), title: "Data Structure Test" },  // March 2, 2025
    { date: new Date(2025, 2, 5), title: "Javascript Test" }   // March 5, 2025
  ];

  const assignmentDates = [
    new Date(2025, 1, 15), // February 15, 2025
    new Date(2025, 1, 19), // February 19, 2025
    new Date(2025, 1, 22)  // February 22, 2025
  ];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const isTestDay = (day) => {
    return testDates.some(test => 
      test.date.getDate() === day && 
      test.date.getMonth() === currentDate.getMonth() && 
      test.date.getFullYear() === currentDate.getFullYear()
    );
  };

  const isAssignmentDay = (day) => {
    return assignmentDates.some(assignmentDate => 
      assignmentDate.getDate() === day && 
      assignmentDate.getMonth() === currentDate.getMonth() && 
      assignmentDate.getFullYear() === currentDate.getFullYear()
    );
  };

  const renderCalendar = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div className="empty" key={`empty-${i}`}></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div 
          className={`day ${isTestDay(day) ? 'test-day' : ''} ${isAssignmentDay(day) ? 'assignment-day' : ''}`} 
          key={day}
        >
          {day}
          {isTestDay(day) && (
            <div className="event-label">
              {testDates.find(test => test.date.getDate() === day).title}
            </div>
          )}
        </div>
      );
    }
    return days;
  };

  return ( 
    <div className='schedule-background'> {/* Added class for background color */}
      <div className="schedule-container">
        <h1 className="schedule-title">Schedule</h1> {/* Added class for title */}

        <div className="calendar">
          <button onClick={handlePrevMonth} className="calendar-button">Previous</button>
          <h2 className="calendar-month">{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
          <button onClick={handleNextMonth} className="calendar-button">Next</button>
          <div className="calendar-grid">
            {renderCalendar()}
          </div>
        </div>

        <section className="bp-4rounded-lg-mb-4"> {/* Added border to Upcoming Tests section */}
          <h2 className="section-title">Upcoming Tests</h2> {/* Added class for section title */}
          <ul className="test-list"> {/* Added class for test list */}
            {testDates.map((test, index) => (
              <li key={index} className="test-item">{test.title} - {test.date.toLocaleString('default', { month: 'long' })} {test.date.getDate()}, {test.date.getFullYear()} at 2:00 PM</li>
            ))}
          </ul>
        </section>

        <section className="bp-4rounded-lg-mb-4"> {/* Added border to Assignments Done section */}
          <h2 className="section-title">Assignments Done</h2> {/* Added class for section title */}
          <ul className='assignment-list'> {/* Added class for assignment list */}
            <li className="assignment-item">Opps - February 15, 2025</li>
            <li className="assignment-item">Development - February 19, 2025</li>
            <li className="assignment-item">Java - February 22, 2025</li>
          </ul>
        </section>

        <section className="bp-4rounded-lg-mb-4"> {/* Added border to Upcoming Lectures section */}
          <h2 className="section-title">Upcoming Lectures</h2> {/* Added class for section title */}
          <ul className="lecture-list"> {/* Added class for lecture list */}
            <li className="lecture-item">Java - February 25, 2025 at 2:00 PM</li>
            <li className="lecture-item">Opps - February 27, 2025 at 1:00 PM</li>
            <li className="lecture-item">Data Structure - March 2, 2025 at 11:00 AM</li>
            <li className="lecture-item">Javascript - March 5, 2025 at 4:00 PM</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Schedule;
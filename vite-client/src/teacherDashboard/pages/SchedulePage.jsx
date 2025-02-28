// SchedulePage.jsx
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
];
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const classes = [
  {
    id: 1,
    subject: "Mathematics",
    class: "10A",
    startTime: "8:00 AM",
    day: "Monday",
    duration: 2,
    room: "Room 101",
  },
];

export const SchedulePage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Class Schedule</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-medium">February 12-16, 2024</h2>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="grid grid-cols-6 border-b">
          <div className="p-4 border-r"></div>
          {weekDays.map((day) => (
            <div
              key={day}
              className="p-4 text-center font-medium text-gray-700 border-r"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-6">
          <div className="border-r">
            {timeSlots.map((time) => (
              <div
                key={time}
                className="h-24 p-2 border-b text-sm text-gray-500"
              >
                {time}
              </div>
            ))}
          </div>
          {weekDays.map((day) => (
            <div key={day} className="border-r">
              {timeSlots.map((time) => (
                <div
                  key={`${day}-${time}`}
                  className="h-24 p-2 border-b relative"
                >
                  {classes
                    .filter((cls) => cls.day === day && cls.startTime === time)
                    .map((cls) => (
                      <div
                        key={cls.id}
                        className="absolute inset-1 bg-blue-50 border-l-4 border-blue-600 rounded p-2"
                        style={{ height: `${cls.duration * 6}rem` }}
                      >
                        <div className="text-sm font-medium text-blue-600">
                          {cls.subject}
                        </div>
                        <div className="text-xs text-gray-500">
                          {cls.class} • {cls.room}
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

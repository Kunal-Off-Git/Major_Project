// AppointmentScheduler.jsx
import React, { useState } from "react";
import { Calendar, Clock, Users, Plus } from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export const AppointmentScheduler = () => {
  const [appointments, setAppointments] = useState([
    {
      id: "1",
      title: "Mathematics Doubt Session",
      date: "2024-02-20",
      time: "14:00",
      type: "doubt",
      students: 5,
    },
    {
      id: "2",
      title: "Physics Class",
      date: "2024-02-21",
      time: "10:00",
      type: "class",
      students: 25,
    },
  ]);

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Schedule Sessions
        </h2>
        <Button>
          <Plus className="w-4 h-4 mr-2" /> New Session
        </Button>
      </div>
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div
                className={`p-2 rounded-lg ${
                  appointment.type === "doubt" ? "bg-purple-100" : "bg-blue-100"
                }`}
              >
                {appointment.type === "doubt" ? (
                  <Users className="w-5 h-5 text-purple-600" />
                ) : (
                  <Calendar className="w-5 h-5 text-blue-600" />
                )}
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  {appointment.title}
                </h3>
                <div className="flex items-center space-x-4 mt-1">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" /> {appointment.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" /> {appointment.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" /> {appointment.students}{" "}
                    students
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                Edit
              </Button>
              <Button variant="ghost" size="sm">
                Cancel
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

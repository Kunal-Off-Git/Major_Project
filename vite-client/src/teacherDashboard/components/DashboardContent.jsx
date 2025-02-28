// DashboardContent.jsx
import React from "react";
import {
  Users,
  BookOpen,
  Calendar,
  TrendingUp,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { Link } from "react-router-dom";

const stats = [
  { icon: Users, label: "Total Students", value: "156", trend: "+12%" },
  { icon: BookOpen, label: "Active Courses", value: "8", trend: "+3%" },
  { icon: Calendar, label: "Upcoming Tests", value: "12", trend: "+5%" },
];

const recentActivity = [
  {
    action: "Graded",
    subject: "Math Quiz - Class 10A",
    time: "2 hours ago",
    status: "completed",
  },
  {
    action: "Submitted",
    subject: "Physics Assignment",
    time: "5 hours ago",
    status: "pending",
  },
  {
    action: "Created",
    subject: "New Biology Test",
    time: "1 day ago",
    status: "active",
  },
];

export const DashboardContent = () => {
  return (
    <div className="flex-1 p-8 space-y-8 max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">
          Welcome Back, Sarah!
        </h2>
        <Button variant="outline" size="sm">
          View Analytics
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="hover:border-[#4318FF]/20 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-r from-[#4318FF] to-[#868CFF] rounded-xl">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="flex items-center text-green-500 text-sm font-medium">
                <TrendingUp className="w-4 h-4 mr-1" />
                {stat.trend}
              </span>
            </div>
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-800 mt-1">
              {stat.value}
            </p>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Recent Activity</h3>
            <Link
              to="/activities"
              className="text-sm text-[#4318FF] hover:text-[#868CFF] transition-colors flex items-center"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-2 rounded-lg ${
                      activity.status === "completed"
                        ? "bg-green-100"
                        : activity.status === "pending"
                        ? "bg-yellow-100"
                        : "bg-blue-100"
                    }`}
                  >
                    <Clock
                      className={`w-5 h-5 ${
                        activity.status === "completed"
                          ? "text-green-600"
                          : activity.status === "pending"
                          ? "text-yellow-600"
                          : "text-blue-600"
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {activity.subject}
                    </p>
                    <p className="text-xs text-gray-500">
                      <span className="text-[#4318FF]">{activity.action}</span>{" "}
                      • {activity.time}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Details
                </Button>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Quick Actions</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-auto py-4 justify-start">
              <Users className="w-5 h-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">Add Student</div>
                <div className="text-xs text-gray-500">
                  Register new student
                </div>
              </div>
            </Button>
            <Button variant="outline" className="h-auto py-4 justify-start">
              <Calendar className="w-5 h-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">Schedule Class</div>
                <div className="text-xs text-gray-500">Create new session</div>
              </div>
            </Button>
            <Button variant="outline" className="h-auto py-4 justify-start">
              <BookOpen className="w-5 h-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">New Assignment</div>
                <div className="text-xs text-gray-500">Create task</div>
              </div>
            </Button>
            <Button variant="outline" className="h-auto py-4 justify-start">
              <Clock className="w-5 h-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">Track Progress</div>
                <div className="text-xs text-gray-500">View analytics</div>
              </div>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

// AnalyticsDashboard.jsx
import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Layers, Users, Clock, BookOpen } from "lucide-react";

const data = {
  weeklyEngagement: [
    { name: "Mon", value: 30 },
    { name: "Tue", value: 45 },
    { name: "Wed", value: 35 },
    { name: "Thu", value: 50 },
    { name: "Fri", value: 40 },
  ],
  studentProgress: [
    { name: "Completed", value: 65 },
    { name: "In Progress", value: 25 },
    { name: "Not Started", value: 10 },
  ],
  courseCompletion: [
    { name: "Module 1", completed: 95 },
    { name: "Module 2", completed: 85 },
    { name: "Module 3", completed: 75 },
    { name: "Module 4", completed: 60 },
    { name: "Module 5", completed: 40 },
  ],
};

const COLORS = ["#4318FF", "#00C49F", "#FFBB28", "#FF8042"];

export const AnalyticsDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-gray-500 text-sm">Active Students</h3>
          <p className="text-2xl font-bold text-gray-800">1,234</p>
        </div>
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Weekly Engagement
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.weeklyEngagement}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#4318FF"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

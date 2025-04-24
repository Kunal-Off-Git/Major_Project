// DashboardContent.jsx
import React from "react";
import {
  Users,
  BookOpen,
  Calendar,
  TrendingUp,
  Clock,
  ArrowRight,
  ShieldCheck,
  ClipboardPen,
  Play,
} from "lucide-react";
// import { Card } from "./ui/Card";
// import { Button } from "./ui/Button";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const stats = [
  { icon: ShieldCheck, label: "Completed Courses", value: "4", trend: "+12%" },
  { icon: BookOpen, label: "Active Courses", value: "3", trend: "+3%" },
  { icon: ClipboardPen, label: "Upcoming Tests", value: "6", trend: "+5%" },
];

const recentActivity = [
  {
    action: "Graded",
    subject: "Basics of Web Development",
    time: "2 hours ago",
    status: "50% completed",
  },
  {
    action: "Submitted",
    subject: "Advanced Web Development using MERN stack",
    time: "5 hours ago",
    status: "0% completed",
  },
  {
    action: "Created",
    subject: "Complete DSA using C++",
    time: "1 day ago",
    status: "30% completed",
  },
];

export const StudentDashboardContent = () => {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-dark">Welcome Back, Raj!</h2>
        <Button variant="outline-primary" size="sm" className="btn-d">
          View Analytics
        </Button>
      </div>

      <div className="row g-4">
        {stats.map((stat) => (
          <div key={stat.label} className="col-md-6 col-lg-4">
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="p-3 rounded bg-primary text-white">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  {/* <span className="text-success d-flex align-items-center fw-medium">
                    <TrendingUp className="me-1" /> {stat.trend}
                  </span> */}
                </div>
                <p className="text-muted mb-1">{stat.label}</p>
                <h3 className="fw-bold text-dark">{stat.value}</h3>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <div className="row g-4 mt-4">
        <div className="col-lg-6">
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between mb-4">
                <h3 className="fw-bold text-dark">Active Courses</h3>
                <Link
                  to="/activities"
                  className="text-primary d-flex align-items-center"
                >
                  View All <ArrowRight className="ms-1" />
                </Link>
              </div>
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between p-3 mb-3 bg-light rounded"
                >
                  <div className="d-flex align-items-center">
                    <div
                      className={`p-2 rounded me-3 ${
                        activity.status === "completed"
                          ? "bg-success-subtle"
                          : activity.status === "pending"
                          ? "bg-warning-subtle"
                          : "bg-info-subtle"
                      }`}
                    >
                      <Play
                        fill="green"
                        strokeWidth={0}
                        className={`w-5 h-5 ${
                          activity.status === "completed"
                            ? "text-success"
                            : activity.status === "pending"
                            ? "text-warning"
                            : "text-info"
                        }`}
                      />
                    </div>
                    <div>
                      <p className="mb-1 fw-medium text-dark">
                        {activity.subject}
                      </p>
                      <p className="mb-0 text-muted small">
                        <span className="text-primary">{activity.status}</span>
                        {/* {" "}
                        • {activity.time} */}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="btn-d"
                  >
                    Visit
                  </Button>
                </div>
              ))}
            </Card.Body>
          </Card>
        </div>

        <div className="col-lg-6 ">
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <h3 className="fw-bold text-dark mb-4 ">Quick Actions</h3>
              <div className="row g-3">
                {[BookOpen, ShieldCheck, ClipboardPen, Clock].map(
                  (Icon, index) => (
                    <div key={index} className="col-6 quick-actions">
                      <Button
                        variant="outline-primary"
                        className="d-flex align-items-center w-100 btn-d"
                      >
                        <Icon className="qa-icons" />
                        <div>
                          <div className="fw-medium">
                            {
                              [
                                "Browse Courses",
                                "Certificates",
                                "Assignments",
                                "Track Progress",
                              ][index]
                            }
                          </div>
                          {/* <div className="small text-muted">
                          {
                            [
                              "Register new student",
                              "Create new session",
                              "Create task",
                              "View analytics",
                            ][index]
                          }
                        </div> */}
                        </div>
                      </Button>
                    </div>
                  )
                )}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

// export const DashboardContent = () => {
//   return (
//     <div className="flex-1 p-8 space-y-8 max-w-7xl mx-auto w-full">
//       <div className="flex items-center justify-between">
//         <h2 className="text-2xl font-bold text-gray-800">
//           Welcome Back, Sarah!
//         </h2>
//         <Button variant="outline" size="sm">
//           View Analytics
//         </Button>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {stats.map((stat) => (
//           <Card
//             key={stat.label}
//             className="hover:border-[#4318FF]/20 transition-colors"
//           >
//             <div className="flex items-center justify-between mb-4">
//               <div className="p-3 bg-gradient-to-r from-[#4318FF] to-[#868CFF] rounded-xl">
//                 <stat.icon className="w-6 h-6 text-white" />
//               </div>
//               <span className="flex items-center text-green-500 text-sm font-medium">
//                 <TrendingUp className="w-4 h-4 mr-1" />
//                 {stat.trend}
//               </span>
//             </div>
//             <p className="text-sm text-gray-500">{stat.label}</p>
//             <p className="text-3xl font-bold text-gray-800 mt-1">
//               {stat.value}
//             </p>
//           </Card>
//         ))}
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Card>
//           <div className="flex items-center justify-between mb-6">
//             <h3 className="text-xl font-bold text-gray-800">Recent Activity</h3>
//             <Link
//               to="/activities"
//               className="text-sm text-[#4318FF] hover:text-[#868CFF] transition-colors flex items-center"
//             >
//               View All
//               <ArrowRight className="w-4 h-4 ml-1" />
//             </Link>
//           </div>
//           <div className="space-y-4">
//             {recentActivity.map((activity, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors"
//               >
//                 <div className="flex items-center space-x-4">
//                   <div
//                     className={`p-2 rounded-lg ${
//                       activity.status === "completed"
//                         ? "bg-green-100"
//                         : activity.status === "pending"
//                         ? "bg-yellow-100"
//                         : "bg-blue-100"
//                     }`}
//                   >
//                     <Clock
//                       className={`w-5 h-5 ${
//                         activity.status === "completed"
//                           ? "text-green-600"
//                           : activity.status === "pending"
//                           ? "text-yellow-600"
//                           : "text-blue-600"
//                       }`}
//                     />
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-800">
//                       {activity.subject}
//                     </p>
//                     <p className="text-xs text-gray-500">
//                       <span className="text-[#4318FF]">{activity.action}</span>{" "}
//                       • {activity.time}
//                     </p>
//                   </div>
//                 </div>
//                 <Button variant="ghost" size="sm">
//                   Details
//                 </Button>
//               </div>
//             ))}
//           </div>
//         </Card>
//         <Card>
//           <div className="flex items-center justify-between mb-6">
//             <h3 className="text-xl font-bold text-gray-800">Quick Actions</h3>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <Button variant="outline" className="h-auto py-4 justify-start">
//               <Users className="w-5 h-5 mr-3" />
//               <div className="text-left">
//                 <div className="font-medium">Add Student</div>
//                 <div className="text-xs text-gray-500">
//                   Register new student
//                 </div>
//               </div>
//             </Button>
//             <Button variant="outline" className="h-auto py-4 justify-start">
//               <Calendar className="w-5 h-5 mr-3" />
//               <div className="text-left">
//                 <div className="font-medium">Schedule Class</div>
//                 <div className="text-xs text-gray-500">Create new session</div>
//               </div>
//             </Button>
//             <Button variant="outline" className="h-auto py-4 justify-start">
//               <BookOpen className="w-5 h-5 mr-3" />
//               <div className="text-left">
//                 <div className="font-medium">New Assignment</div>
//                 <div className="text-xs text-gray-500">Create task</div>
//               </div>
//             </Button>
//             <Button variant="outline" className="h-auto py-4 justify-start">
//               <Clock className="w-5 h-5 mr-3" />
//               <div className="text-left">
//                 <div className="font-medium">Track Progress</div>
//                 <div className="text-xs text-gray-500">View analytics</div>
//               </div>
//             </Button>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

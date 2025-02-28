// types.js

export const User = {
  id: "",
  name: "",
  email: "",
  role: "",
  avatar: "",
  settings: {},
};

export const UserSettings = {
  notifications: {},
  theme: "light",
  language: "",
  accessibility: {},
};

export const NotificationSettings = {
  email: false,
  push: false,
  desktop: false,
};

export const AccessibilitySettings = {
  fontSize: 16,
  contrast: "normal",
  reduceMotion: false,
};

export const Notification = {
  id: "",
  title: "",
  message: "",
  type: "info",
  read: false,
  createdAt: "",
};

export const Message = {
  id: "",
  senderId: "",
  receiverId: "",
  content: "",
  read: false,
  createdAt: "",
};

export const Course = {
  id: "",
  title: "",
  description: "",
  thumbnail: "",
  instructor: {},
  enrolledStudents: 0,
  duration: 0,
  progress: 0,
  materials: [],
  liveClasses: [],
  modules: [],
};

export const CourseModule = {
  id: "",
  title: "",
  description: "",
  content: [],
  quizzes: [],
  assignments: [],
};

export const ModuleContent = {
  id: "",
  type: "video",
  title: "",
  url: "",
  duration: 0,
  completed: false,
};

export const LiveClass = {
  id: "",
  courseId: "",
  title: "",
  startTime: "",
  duration: 0,
  status: "scheduled",
  attendees: 0,
  recording: "",
};

export const Quiz = {
  id: "",
  title: "",
  questions: [],
  timeLimit: 0,
  dueDate: "",
  attempts: 0,
};

export const QuizQuestion = {
  id: "",
  question: "",
  type: "multiple",
  options: [],
  correctAnswer: "",
};

export const Assignment = {
  id: "",
  title: "",
  description: "",
  dueDate: "",
  totalPoints: 0,
  submissions: [],
};

export const AssignmentSubmission = {
  id: "",
  studentId: "",
  assignmentId: "",
  submittedAt: "",
  files: [],
  grade: 0,
  feedback: "",
};

export const StudentProgress = {
  id: "",
  studentId: "",
  courseId: "",
  completedModules: 0,
  totalModules: 0,
  quizScores: [],
  assignmentGrades: [],
  attendance: [],
};

export const QuizScore = {
  quizId: "",
  score: 0,
  totalQuestions: 0,
  attemptedAt: "",
};

export const AssignmentGrade = {
  assignmentId: "",
  grade: 0,
  totalPoints: 0,
  gradedAt: "",
};

export const AttendanceRecord = {
  classId: "",
  present: false,
  duration: 0,
  joinedAt: "",
};

export const Analytics = {
  courseEngagement: {
    viewsPerDay: [],
    averageWatchTime: 0,
    completionRate: 0,
  },
  studentPerformance: {
    averageGrade: 0,
    quizAccuracy: 0,
    attendanceRate: 0,
  },
  classParticipation: {
    questionsAsked: 0,
    discussionPosts: 0,
    peerInteractions: 0,
  },
};

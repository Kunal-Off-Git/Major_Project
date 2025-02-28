// VideoConference.jsx
import React, { useState } from "react";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Users,
  MessageSquare,
  Share2,
  Settings,
} from "lucide-react";

export const VideoConference = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showParticipants, setShowParticipants] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900">
      <div className="flex-1 flex flex-col">
        {/* Main Video Area */}
        <div className="flex-1 grid grid-cols-3 gap-4 p-4">
          <div className="bg-gray-800 rounded-lg aspect-video"></div>
          <div className="bg-gray-800 rounded-lg aspect-video"></div>
          <div className="bg-gray-800 rounded-lg aspect-video"></div>
        </div>
        {/* Controls */}
        <div className="h-20 bg-gray-800 px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`p-3 rounded-full ${
                isMuted ? "bg-red-500" : "bg-gray-600 hover:bg-gray-700"
              }`}
            >
              {isMuted ? (
                <MicOff className="w-6 h-6 text-white" />
              ) : (
                <Mic className="w-6 h-6 text-white" />
              )}
            </button>
            <button
              onClick={() => setIsVideoOff(!isVideoOff)}
              className={`p-3 rounded-full ${
                isVideoOff ? "bg-red-500" : "bg-gray-600 hover:bg-gray-700"
              }`}
            >
              {isVideoOff ? (
                <VideoOff className="w-6 h-6 text-white" />
              ) : (
                <Video className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowParticipants(!showParticipants)}
              className="p-3 rounded-full bg-gray-600 hover:bg-gray-700"
            >
              <Users className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => setShowChat(!showChat)}
              className="p-3 rounded-full bg-gray-600 hover:bg-gray-700"
            >
              <MessageSquare className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => setIsScreenSharing(!isScreenSharing)}
              className="p-3 rounded-full bg-gray-600 hover:bg-gray-700"
            >
              <Share2 className="w-6 h-6 text-white" />
            </button>
            <button className="p-3 rounded-full bg-gray-600 hover:bg-gray-700">
              <Settings className="w-6 h-6 text-white" />
            </button>
          </div>
          <button className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
            End Call
          </button>
        </div>
      </div>
    </div>
  );
};

// MessagesPage.jsx
import React, { useState } from "react";
import { Search, Send } from "lucide-react";
import { useApp } from "../context/AppContext";

const mockContacts = [
  {
    id: "2",
    name: "John Smith",
    role: "Science Teacher",
    avatar: "john_doe.png",
    online: true,
  },
];

export const MessagesPage = () => {
  const { messages, markMessageAsRead } = useApp();
  const [selectedContact, setSelectedContact] = useState(mockContacts[0]);
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className="flex h-screen bg-white">
      <div className="w-80 border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4318FF]"
            />
          </div>
        </div>
        <div className="overflow-y-auto h-full">
          {mockContacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => setSelectedContact(contact)}
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 ${
                selectedContact?.id === contact.id ? "bg-gray-50" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-10 h-10 rounded-full"
                />
                {contact.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
                )}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">
                  {contact.name}
                </p>
                <p className="text-xs text-gray-500">{contact.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedContact ? (
          <>
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center">
                <img
                  src={selectedContact.avatar}
                  alt={selectedContact.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {selectedContact.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {selectedContact.online ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages
                .filter(
                  (m) =>
                    m.senderId === selectedContact.id ||
                    m.receiverId === selectedContact.id
                )
                .map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.senderId === selectedContact.id
                        ? "justify-start"
                        : "justify-end"
                    }`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        message.senderId === selectedContact.id
                          ? "bg-gray-100"
                          : "bg-[#4318FF] text-white"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs mt-1 opacity-75">
                        {new Date(message.createdAt).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4318FF]"
                />
                <button
                  onClick={() => {
                    // Handle sending message
                    setNewMessage("");
                  }}
                  className="p-2 bg-[#4318FF] text-white rounded-lg hover:bg-[#868CFF] transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a contact to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

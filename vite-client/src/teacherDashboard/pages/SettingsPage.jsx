// SettingsPage.jsx
import React from "react";
import { Bell, Globe, Eye, Moon, Sun } from "lucide-react";
import { useApp } from "../context/AppContext";

export const SettingsPage = () => {
  const { user, updateUserSettings } = useApp();
  if (!user) return null;
  const { settings } = user;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Settings</h1>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
            <Bell className="w-5 h-5 mr-2 text-[#4318FF]" /> Notification
            Preferences
          </h2>
          <div className="space-y-4">
            {Object.entries(settings.notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <label className="text-sm text-gray-600 capitalize">
                  {key} Notifications
                </label>
                <button
                  onClick={() =>
                    updateUserSettings({
                      notifications: {
                        ...settings.notifications,
                        [key]: !value,
                      },
                    })
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    value ? "bg-[#4318FF]" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      value ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Language Settings */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
            <Globe className="w-5 h-5 mr-2 text-[#4318FF]" />
            Language & Region
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm text-gray-600">Language</label>
              <select
                value={settings.language}
                onChange={(e) =>
                  updateUserSettings({
                    language: e.target.value,
                  })
                }
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4318FF]"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>
          </div>
        </div>
        {/* Accessibility Settings */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
            <Eye className="w-5 h-5 mr-2 text-[#4318FF]" />
            Accessibility
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm text-gray-600">Font Size</label>
              <input
                type="range"
                min="12"
                max="24"
                value={settings.accessibility.fontSize}
                onChange={(e) =>
                  updateUserSettings({
                    accessibility: {
                      ...settings.accessibility,
                      fontSize: Number(e.target.value),
                    },
                  })
                }
                className="w-32"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm text-gray-600">High Contrast</label>
              <button
                onClick={() =>
                  updateUserSettings({
                    accessibility: {
                      ...settings.accessibility,
                      contrast:
                        settings.accessibility.contrast === "normal"
                          ? "high"
                          : "normal",
                    },
                  })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.accessibility.contrast === "high"
                    ? "bg-[#4318FF]"
                    : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.accessibility.contrast === "high"
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm text-gray-600">Reduce Motion</label>
              <button
                onClick={() =>
                  updateUserSettings({
                    accessibility: {
                      ...settings.accessibility,
                      reduceMotion: !settings.accessibility.reduceMotion,
                    },
                  })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.accessibility.reduceMotion
                    ? "bg-[#4318FF]"
                    : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.accessibility.reduceMotion
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
        {/* Theme Settings */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
            {settings.theme === "light" ? (
              <Sun className="w-5 h-5 mr-2 text-[#4318FF]" />
            ) : (
              <Moon className="w-5 h-5 mr-2 text-[#4318FF]" />
            )}
            Theme
          </h2>
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-600">Dark Mode</label>
            <button
              onClick={() =>
                updateUserSettings({
                  theme: settings.theme === "light" ? "dark" : "light",
                })
              }
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.theme === "dark" ? "bg-[#4318FF]" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.theme === "dark" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

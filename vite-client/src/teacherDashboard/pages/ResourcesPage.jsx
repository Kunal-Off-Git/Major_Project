// ResourcesPage.jsx
import React from "react";
import { ResourceManager } from "../components/ResourceLibrary/ResourceManager";

export const ResourcesPage = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Resource Library</h1>
      <ResourceManager />
    </div>
  );
};

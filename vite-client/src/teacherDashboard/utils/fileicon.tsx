import { FileText, Video, Image, Link, File } from "lucide-react";
import React from "react";

interface Resource {
  id: string;
  name: string;
  type: "document" | "video" | "image" | "link";
  size?: string;
  url: string;
  createdAt: string;
  thumbnail?: string;
}

export const getFileIcon = (type: Resource["type"]) => {
  switch (type) {
    case "document":
      return <FileText className="w-6 h-6" />;
    case "video":
      return <Video className="w-6 h-6" />;
    case "image":
      return <Image className="w-6 h-6" />;
    case "link":
      return <Link className="w-6 h-6" />;
    default:
      return <File className="w-6 h-6" />;
  }
};

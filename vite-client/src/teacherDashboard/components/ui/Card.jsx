// Card.jsx
import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";

export const Card = forwardRef(
  ({ className, children, noPadding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md",
          !noPadding && "p-6",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

import React from "react";
import "./modern-card.css";

export default function ModernCard({ children, classStyle,color }) {
  return (
    <div className={classStyle ? `modern-card-${classStyle} ${color}` : "modern-card" }>
      {children}
    </div>
  );
}

// Spacing.tsx
import React from "react";

interface SpacingProps {
  size?: string;
  children?: React.ReactNode;
}

const Spacing: React.FC<SpacingProps> = ({ size = "2rem", children }) => {
  return <div style={{ margin: size }}>{children}</div>;
};

export default Spacing;

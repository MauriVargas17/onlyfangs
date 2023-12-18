import React from "react";

interface DynamicButtonProps {
  label: string;
  onClick: () => void;
}

const DynamicButton: React.FC<DynamicButtonProps> = ({ label, onClick }) => {
  return (
    <button className="regular-16 text-gray-30 mb-2" onClick={onClick}>
      {label}
    </button>
  );
};

export default DynamicButton;

// MenuItemContent.tsx
import React from 'react';

interface MenuItemContentProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AppMenuItemContent: React.FC<MenuItemContentProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      {icon}
      <div className="flex flex-col">
        <h4 className="text-sm font-bold">{title}</h4>
        <p className="text-xs font-light">{description}</p>
      </div>
    </div>
  );
};

export default AppMenuItemContent;

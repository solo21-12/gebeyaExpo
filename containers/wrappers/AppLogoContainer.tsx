import React from "react";

type Props = {
  children: React.ReactNode;
  backGroundImage: string;
  className?: string;
};

const LogoContainer: React.FC<Props> = ({
  backGroundImage,
  children,
  className,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backGroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default LogoContainer;

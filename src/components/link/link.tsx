import React from "react";

interface ILinkProps {
  to: string;
}

export const Link: React.FC<ILinkProps> = ({ children, to }) => (
  <a href={to} target="_blank" rel="noreferrer">
    {children}
  </a>
);

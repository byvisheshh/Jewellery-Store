import React from "react";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  title?: string;
}

export function navigateTo(to: string) {
  if (window.location.pathname !== to) {
    window.history.pushState({}, "", to);
    window.dispatchEvent(new CustomEvent("app:navigate", { detail: { path: to } }));
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export const Link: React.FC<LinkProps> = ({
  to,
  children,
  className = "",
  onClick,
  title,
  ...rest
}) => {
  const isExternal = to.startsWith("http://") || to.startsWith("https://") || to.startsWith("mailto:") || to.startsWith("tel:");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }

    // Allow default browser behavior for modifier keys (open in new tab, etc.)
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.altKey ||
      e.shiftKey
    ) {
      return;
    }

    if (!isExternal && !to.startsWith("#")) {
      e.preventDefault();
      navigateTo(to);
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={className}
      title={title}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
};

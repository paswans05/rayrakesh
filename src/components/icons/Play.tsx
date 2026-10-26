import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Play = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M8.5 19c-0.552 0-1-0.448-1-1v0-12c0-0.552 0.448-1 1-1 0.207 0 0.399 0.063 0.558 0.17l-0.004-0.002 9 6c0.27 0.182 0.445 0.486 0.445 0.832s-0.175 0.65-0.442 0.83l-0.004 0.002-9 6c-0.156 0.105-0.348 0.168-0.555 0.168h-0zM9.5 7.869v8.263l6.197-4.131z"></path>
      </svg>
    );
  }
);

Play.displayName = 'Play';

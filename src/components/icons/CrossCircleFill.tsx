import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CrossCircleFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM15.707 14.293c0.188 0.182 0.305 0.437 0.305 0.719 0 0.552-0.448 1-1 1-0.282 0-0.537-0.117-0.719-0.305l-2.293-2.293-2.293 2.293c-0.18 0.174-0.425 0.281-0.695 0.281-0.552 0-1-0.448-1-1 0-0.27 0.107-0.515 0.281-0.695l2.293-2.293-2.293-2.293c-0.174-0.18-0.281-0.425-0.281-0.695 0-0.552 0.448-1 1-1 0.27 0 0.515 0.107 0.695 0.281l2.293 2.293 2.293-2.293c0.18-0.174 0.425-0.281 0.695-0.281 0.552 0 1 0.448 1 1 0 0.27-0.107 0.515-0.281 0.695l-2.293 2.293z"></path>
      </svg>
    );
  }
);

CrossCircleFill.displayName = 'CrossCircleFill';

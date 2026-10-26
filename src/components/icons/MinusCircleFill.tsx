import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const MinusCircleFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM16 13h-8c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h8c0.552 0 1 0.448 1 1s-0.448 1-1 1v0z"></path>
      </svg>
    );
  }
);

MinusCircleFill.displayName = 'MinusCircleFill';

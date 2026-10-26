import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Mic = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 15.727c2.058-0.002 3.725-1.67 3.727-3.727v-7.273c0-2.058-1.669-3.727-3.727-3.727s-3.727 1.669-3.727 3.727v0 7.273c0.002 2.058 1.669 3.725 3.727 3.727h0zM10.273 4.728c0-0.954 0.773-1.727 1.727-1.727s1.727 0.773 1.727 1.727v0 7.272c0 0.954-0.773 1.727-1.727 1.727s-1.727-0.773-1.727-1.727v0zM19.364 10.182v1.818c-0.006 3.71-2.754 6.776-6.325 7.283l-0.039 0.005v1.713h2.5c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-7c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h2.5v-1.713c-3.61-0.511-6.357-3.577-6.364-7.287v-1.819c0-0.552 0.448-1 1-1s1 0.448 1 1v0 1.818c0 2.962 2.401 5.364 5.364 5.364s5.364-2.401 5.364-5.364v0-1.818c0-0.552 0.448-1 1-1s1 0.448 1 1v0z"></path>
      </svg>
    );
  }
);

Mic.displayName = 'Mic';

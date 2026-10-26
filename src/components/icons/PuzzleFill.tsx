import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const PuzzleFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.25 10.75v-4c-0.001-1.104-0.896-1.999-2-2h-4c0-1.933-1.567-3.5-3.5-3.5s-3.5 1.567-3.5 3.5v0h-3c-1.104 0.001-1.999 0.896-2 2v5c0 0.552 0.448 1 1 1v0h1c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5v0h-1c-0.552 0-1 0.448-1 1v0 4c0.001 1.104 0.896 1.999 2 2h7c0.552 0 1-0.448 1-1v0-1c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5v0 1c0 0.552 0.448 1 1 1v0h2c1.104-0.001 1.999-0.896 2-2v-3c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5v0z"></path>
      </svg>
    );
  }
);

PuzzleFill.displayName = 'PuzzleFill';

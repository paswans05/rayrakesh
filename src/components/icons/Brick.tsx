import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Brick = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21.5 2h-19c-0.828 0.001-1.499 0.672-1.5 1.5v17c0.001 0.828 0.672 1.499 1.5 1.5h19c0.828-0.001 1.499-0.672 1.5-1.5v-17c-0.001-0.828-0.672-1.499-1.5-1.5h-0zM21 4v7h-8v-7zM11 4v7h-8v-7zM3 20v-7h3v7zM8 20v-7h8v7zM18 20v-7h3v7z"></path>
      </svg>
    );
  }
);

Brick.displayName = 'Brick';

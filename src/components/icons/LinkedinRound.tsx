import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const LinkedinRound = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M8.658 7.099c0-0.854-0.693-1.547-1.547-1.547s-1.547 0.693-1.547 1.547c0 0.854 0.693 1.547 1.547 1.547v0c0.853-0.002 1.545-0.693 1.547-1.547v-0zM8.449 18.409v-8.588h-2.672v8.588h2.672zM18.445 13.701c0-2.314-0.502-4.095-3.203-4.095-0.031-0.001-0.067-0.002-0.104-0.002-1.027 0-1.926 0.552-2.415 1.375l-0.007 0.013h-0.037v-1.172h-2.559v8.588h2.669v-4.249c0-1.122 0.213-2.207 1.604-2.207 1.366 0 1.386 1.282 1.386 2.277v4.179h2.667zM6 3h12c1.657 0 3 1.343 3 3v0 12c0 1.657-1.343 3-3 3v0h-12c-1.657 0-3-1.343-3-3v0-12c0-1.657 1.343-3 3-3v0z"></path>
      </svg>
    );
  }
);

LinkedinRound.displayName = 'LinkedinRound';

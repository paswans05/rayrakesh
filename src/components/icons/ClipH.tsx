import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ClipH = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M16.121 17.94h-7.156c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h7.156c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5v0h-9.742c-1.105 0-2 0.895-2 2s0.895 2 2 2v0l9.747-0.006c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5v0l-6.408 0.006c-0 0-0 0-0 0-0.552 0-1-0.448-1-1s0.447-1 0.999-1l6.409-0.006c0 0 0 0 0 0 1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.499 2.5l-9.747 0.006c-0 0-0 0-0 0-2.209 0-4-1.791-4-4s1.791-4 4-4h9.742c3.038 0 5.5 2.462 5.5 5.5s-2.462 5.5-5.5 5.5v0z"></path>
      </svg>
    );
  }
);

ClipH.displayName = 'ClipH';

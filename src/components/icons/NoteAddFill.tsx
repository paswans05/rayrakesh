import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const NoteAddFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.5 2h-11c-1.932 0.002-3.498 1.568-3.5 3.5v13c0.002 1.932 1.568 3.498 3.5 3.5h11c1.932-0.002 3.498-1.568 3.5-3.5v-13c-0.002-1.932-1.568-3.498-3.5-3.5h-0zM17 17c0 0.552-0.448 1-1 1v0h-8c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h8c0.552 0 1 0.448 1 1v0zM7 13c0-0.552 0.448-1 1-1v0h6c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-6c-0.552 0-1-0.448-1-1v0zM7.25 8.5c0-0.414 0.336-0.75 0.75-0.75v0h0.75v-0.75c0-0.414 0.336-0.75 0.75-0.75s0.75 0.336 0.75 0.75v0 0.75h0.75c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75v0h-0.75v0.75c0 0.414-0.336 0.75-0.75 0.75s-0.75-0.336-0.75-0.75v0-0.75h-0.75c-0.414 0-0.75-0.336-0.75-0.75v0z"></path>
      </svg>
    );
  }
);

NoteAddFill.displayName = 'NoteAddFill';

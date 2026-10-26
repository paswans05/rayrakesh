import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Task = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M16.5 22h-9c-1.38-0.001-2.499-1.12-2.5-2.5v-15c0.001-1.38 1.12-2.499 2.5-2.5h9c1.38 0.001 2.499 1.12 2.5 2.5v15c-0.001 1.38-1.12 2.499-2.5 2.5h-0zM7.5 4c-0.275 0.004-0.496 0.225-0.5 0.5v15c0.004 0.275 0.225 0.496 0.5 0.5h9c0.275-0.004 0.496-0.225 0.5-0.5v-15c-0.004-0.275-0.225-0.496-0.5-0.5h-0zM15 7c0-0.552-0.448-1-1-1v0h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0zM15 11c0-0.552-0.448-1-1-1v0h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0z"></path>
      </svg>
    );
  }
);

Task.displayName = 'Task';

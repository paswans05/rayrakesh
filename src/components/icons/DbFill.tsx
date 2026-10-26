import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const DbFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M3 12.302v-4.762c1.937 1.257 5.48 1.908 9 1.908s7.063-0.651 9-1.908v4.762c0 1.079-3.506 2.646-9 2.646s-9-1.567-9-2.646zM12 16.448c-3.52 0-7.063-0.651-9-1.908v3.76c0 2.542 4.665 3.7 9 3.7s9-1.158 9-3.7v-3.76c-1.937 1.257-5.48 1.908-9 1.908zM12 7.948c5.249 0 8.675-1.429 8.971-2.498-0.3-2.366-4.783-3.45-8.971-3.45s-8.671 1.084-8.971 3.45c0.296 1.068 3.722 2.498 8.971 2.498z"></path>
      </svg>
    );
  }
);

DbFill.displayName = 'DbFill';

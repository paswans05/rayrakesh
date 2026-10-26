import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const FolderFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.2 6h-7.534l-1.509-2.515c-0.178-0.293-0.495-0.485-0.857-0.485-0 0-0 0-0 0h-4.5c-0.002 0-0.005 0-0.008 0-1.537 0-2.784 1.242-2.792 2.777v12.49c0.021 1.514 1.253 2.734 2.77 2.734 0.011 0 0.021-0 0.032-0l-0.002 0h14.4c0.009 0 0.020 0 0.030 0 1.517 0 2.749-1.219 2.77-2.732l0-0.002v-9.533c-0.021-1.514-1.253-2.734-2.77-2.734-0.011 0-0.021 0-0.032 0l0.002-0z"></path>
      </svg>
    );
  }
);

FolderFill.displayName = 'FolderFill';

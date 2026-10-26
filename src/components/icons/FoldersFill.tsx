import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const FoldersFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M22.111 7.333v7.334c-0.027 1.294-1.083 2.333-2.381 2.333-0.014 0-0.029-0-0.043-0l0.002 0h-11.378c-0.012 0-0.027 0-0.041 0-1.298 0-2.354-1.039-2.381-2.331l-0-0.003v-9.334c0.027-1.294 1.083-2.333 2.381-2.333 0.014 0 0.029 0 0.043 0l-0.002-0h3.556c0 0 0.001 0 0.001 0 0.335 0 0.631 0.165 0.812 0.418l0.002 0.003 1.124 1.579h5.884c0.012-0 0.027-0 0.041-0 1.298 0 2.354 1.039 2.381 2.331l0 0.003zM17.334 19h-12.445c-0.429-0-0.777-0.348-0.777-0.777v-10.667c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 10.667c0.002 1.533 1.244 2.775 2.777 2.777h12.445c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
      </svg>
    );
  }
);

FoldersFill.displayName = 'FoldersFill';

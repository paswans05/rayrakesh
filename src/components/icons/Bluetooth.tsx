import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Bluetooth = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.25 16.193l-5.803 5.807-0.106-7.745-3.364 3.363-1.227-1.227 4.221-4.234-4.221-4.234 1.227-1.227 3.364 3.364v-8.060l5.703 6.121-3.619 4.036zM13.056 6.168l0.013 3.918 1.952-1.952zM13.056 18.145l1.965-1.965-1.952-1.952z"></path>
      </svg>
    );
  }
);

Bluetooth.displayName = 'Bluetooth';

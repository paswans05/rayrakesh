import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const GoogleDrive = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M11.236 10.104l-6.283 10.896-3.238-5.686 6.191-10.892zM22.285 15.314l-3.238 5.686h-12.475l3.238-5.686zM8.762 3h6.476l6.573 11.367h-6.477z"></path>
      </svg>
    );
  }
);

GoogleDrive.displayName = 'GoogleDrive';

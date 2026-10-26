import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Dropbox = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M7.015 9.901l5 3.194-5 3.193-5.015-3.223 5.011-3.194-5.011-3.162 5.011-3.194 5.004 3.194zM11.985 14.099l5 3.193-5 3.194-5-3.194zM17.016 9.871l-5-3.166 4.974-3.19 5.011 3.194-5.011 3.193 5.011 3.19-5.011 3.193-4.974-3.219z"></path>
      </svg>
    );
  }
);

Dropbox.displayName = 'Dropbox';

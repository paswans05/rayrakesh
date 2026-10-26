import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ForwardFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20.658 11.248l-8-7c-0.175-0.153-0.406-0.247-0.658-0.247-0.552 0-1 0.447-1 1v4.797l-6.342-5.549c-0.175-0.153-0.406-0.247-0.658-0.247-0.552 0-1 0.447-1 1v14c0 0.552 0.448 1 1 1 0.253 0 0.483-0.094 0.659-0.248l6.341-5.548v4.797c0 0.552 0.448 1 1 1 0.253 0 0.483-0.094 0.659-0.248l7.999-6.999c0.21-0.184 0.342-0.453 0.342-0.752s-0.132-0.568-0.341-0.751l-0.001-0.001z"></path>
      </svg>
    );
  }
);

ForwardFill.displayName = 'ForwardFill';

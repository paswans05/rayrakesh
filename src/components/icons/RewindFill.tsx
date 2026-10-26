import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const RewindFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20.413 4.089c-0.121-0.057-0.263-0.089-0.413-0.089-0.253 0-0.483 0.094-0.659 0.249l0.001-0.001-6.342 5.549v-4.797c-0-0.552-0.448-1-1-1-0.253 0-0.483 0.094-0.659 0.248l-7.999 6.999c-0.21 0.184-0.342 0.453-0.342 0.752s0.132 0.568 0.341 0.751l0.001 0.001 8 7c0.175 0.153 0.406 0.247 0.658 0.247 0.552 0 1-0.447 1-1v-4.797l6.342 5.549c0.175 0.153 0.406 0.247 0.658 0.247 0.552 0 1-0.447 1-1v-14c-0-0.403-0.238-0.749-0.581-0.908l-0.006-0.003z"></path>
      </svg>
    );
  }
);

RewindFill.displayName = 'RewindFill';

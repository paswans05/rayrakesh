import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Download = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21 14.667v3.556c-0.002 1.533-1.244 2.776-2.778 2.778h-12.445c-1.533-0.002-2.776-1.244-2.778-2.778v-3.556c0-0.552 0.448-1 1-1s1 0.448 1 1v0 3.556c0.001 0.429 0.348 0.777 0.778 0.778h12.444c0.429-0.001 0.777-0.348 0.778-0.778v-3.556c0-0.552 0.448-1 1-1s1 0.448 1 1v0zM11.293 15.373c0.181 0.18 0.431 0.292 0.707 0.292s0.526-0.111 0.707-0.292l4.444-4.444c0.186-0.182 0.302-0.435 0.302-0.716 0-0.552-0.448-1-1-1-0.281 0-0.534 0.116-0.716 0.302l-0 0-2.737 2.737v-8.252c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 8.252l-2.737-2.737c-0.182-0.186-0.435-0.302-0.716-0.302-0.552 0-1 0.448-1 1 0 0.281 0.116 0.534 0.302 0.716l0 0z"></path>
      </svg>
    );
  }
);

Download.displayName = 'Download';

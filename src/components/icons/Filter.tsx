import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Filter = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M14 21c-0 0-0.001 0-0.001 0-0.147 0-0.286-0.032-0.411-0.089l0.006 0.003-4-1.778c-0.353-0.16-0.594-0.508-0.594-0.913v-5.456l-6.662-8.132c-0.141-0.171-0.227-0.392-0.227-0.634 0-0.552 0.448-1 1-1h17.777c0.552 0 1 0.448 1 1 0 0.241-0.086 0.463-0.228 0.636l0.001-0.002-6.662 8.132v7.234c0 0.552-0.448 1-1 1v0zM11 17.572l2 0.889v-6.053c0-0.241 0.086-0.463 0.228-0.636l-0.001 0.002 5.55-6.775h-13.554l5.55 6.775c0.141 0.171 0.227 0.392 0.227 0.634v0z"></path>
      </svg>
    );
  }
);

Filter.displayName = 'Filter';

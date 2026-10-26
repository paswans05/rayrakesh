import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Piority = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M14.645 19h-11.645c-0 0-0 0-0 0-0.552 0-1-0.448-1-1 0-0.286 0.12-0.545 0.313-0.727l0-0 5.585-5.273-5.526-5.218c-0.228-0.184-0.372-0.463-0.372-0.775 0-0 0-0.001 0-0.001v0-0.003c0-0.001 0-0.002 0-0.003 0-0.517 0.392-0.942 0.895-0.995l0.004-0h0.002c0.030-0.003 0.062-0.005 0.093-0.005h11.65c0.266 0 0.508 0.104 0.687 0.273l-0-0 6.355 6c0.193 0.183 0.313 0.441 0.313 0.728s-0.12 0.545-0.313 0.727l-0 0-6.355 6c-0.179 0.169-0.42 0.272-0.686 0.273h-0zM5.516 17h8.732l5.296-5-5.296-5h-8.732l4.526 4.272c0.193 0.183 0.313 0.441 0.313 0.727s-0.12 0.545-0.313 0.727l-0 0z"></path>
      </svg>
    );
  }
);

Piority.displayName = 'Piority';

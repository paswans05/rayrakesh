import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const PiorityFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21.687 11.272l-6.355-6c-0.179-0.169-0.421-0.272-0.687-0.273h-11.65c-0.031 0-0.063 0.002-0.093 0.005h-0.002c-0.507 0.053-0.899 0.478-0.899 0.995 0 0.001 0 0.002 0 0.003v-0 0.003c0 0 0 0.001 0 0.001 0 0.313 0.144 0.592 0.37 0.774l0.002 0.001 5.526 5.218-5.585 5.273c-0.193 0.183-0.314 0.441-0.314 0.727 0 0.552 0.448 1 1 1 0 0 0 0 0 0h11.644c0.266-0 0.508-0.104 0.687-0.273l-0 0 6.355-6c0.193-0.183 0.313-0.441 0.313-0.728s-0.12-0.545-0.313-0.727l-0-0z"></path>
      </svg>
    );
  }
);

PiorityFill.displayName = 'PiorityFill';

import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignEth = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 15.819l-5.93-3.618 5.93-10.201 5.93 10.201zM17.93 13.357l-5.93 8.643-5.93-8.643 5.93 3.618z"></path>
      </svg>
    );
  }
);

SignEth.displayName = 'SignEth';

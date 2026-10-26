import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignInr = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12.747 21l-6.968-6.494 0.032-2.21 3.534 0.024c0.081 0.007 0.175 0.011 0.271 0.011 1.727 0 3.16-1.254 3.44-2.901l0.003-0.021 0.121-0.645h-7.44l0.024-1.683 7.218 0.023-0.636-0.868c-0.663-0.834-1.677-1.365-2.815-1.365-0.065 0-0.131 0.002-0.195 0.005l0.009-0h-3.605l0.024-1.875 12.497 0.024-0.024 1.684-3.059-0.024h-0.928l0.45 0.81c0.224 0.361 0.416 0.776 0.556 1.215l0.011 0.039 0.11 0.401h2.883l-0.024 1.684-2.204-0.024h-0.498l-0.045 0.495c-0.19 2.752-2.469 4.912-5.252 4.912-0.019 0-0.039-0-0.058-0l0.003 0-1.334 0.039 7.287 6.744z"></path>
      </svg>
    );
  }
);

SignInr.displayName = 'SignInr';

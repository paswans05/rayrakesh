import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignEthAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c6.627 0 12-5.373 12-12v0c0-6.627-5.373-12-12-12v0zM12 18.5l-3.854-5.618 3.854 2.352 3.854-2.352zM12 14.482l-3.854-2.352 3.854-6.631 3.854 6.631z"></path>
      </svg>
    );
  }
);

SignEthAlt.displayName = 'SignEthAlt';

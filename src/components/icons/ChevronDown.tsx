import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ChevronDown = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 15.5c-0 0-0.001 0-0.001 0-0.276 0-0.525-0.112-0.706-0.293l-5-5c-0.174-0.18-0.281-0.425-0.281-0.695 0-0.552 0.448-1 1-1 0.27 0 0.515 0.107 0.695 0.281l4.293 4.293 4.293-4.293c0.18-0.174 0.425-0.281 0.695-0.281 0.552 0 1 0.448 1 1 0 0.27-0.107 0.515-0.281 0.695l-5 5c-0.18 0.181-0.43 0.293-0.706 0.293-0 0-0.001 0-0.001 0h0z"></path>
      </svg>
    );
  }
);

ChevronDown.displayName = 'ChevronDown';

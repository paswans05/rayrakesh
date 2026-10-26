import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const MinimizeAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12.778 10.222v-5c0-0.552 0.448-1 1-1s1 0.448 1 1v0 2.586l4.515-4.515c0.182-0.188 0.437-0.305 0.719-0.305 0.552 0 1 0.448 1 1 0 0.282-0.117 0.537-0.305 0.719l-4.515 4.515h2.586c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-5c-0.551-0.002-0.998-0.449-1-1v-0zM4.707 20.707l4.515-4.515v2.586c0 0.552 0.448 1 1 1s1-0.448 1-1v0-5c-0.002-0.551-0.449-0.998-1-1h-5c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h2.586l-4.515 4.515c-0.174 0.18-0.281 0.425-0.281 0.695 0 0.552 0.448 1 1 1 0.27 0 0.515-0.107 0.695-0.281l-0 0z"></path>
      </svg>
    );
  }
);

MinimizeAlt.displayName = 'MinimizeAlt';

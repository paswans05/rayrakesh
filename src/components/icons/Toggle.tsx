import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Toggle = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M7.214 15.303c1.797-0.033 3.242-1.497 3.242-3.299 0-1.823-1.477-3.3-3.3-3.3s-3.3 1.477-3.3 3.3c0 0.005 0 0.009 0 0.014v-0.001c0.004 1.816 1.477 3.287 3.294 3.287 0.022 0 0.045-0 0.067-0.001l-0.003 0zM17 7.75c2.347 0 4.25 1.903 4.25 4.25s-1.903 4.25-4.25 4.25v0h-10c-2.347 0-4.25-1.903-4.25-4.25s1.903-4.25 4.25-4.25v0h10zM17 6h-10c-3.314 0-6 2.686-6 6s2.686 6 6 6v0h10c3.314 0 6-2.686 6-6s-2.686-6-6-6v0z"></path>
      </svg>
    );
  }
);

Toggle.displayName = 'Toggle';

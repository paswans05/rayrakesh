import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ActivityRoundFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.222 2h-12.444c-2.085 0.002-3.775 1.692-3.778 3.778v12.445c0.002 2.085 1.692 3.775 3.778 3.778h12.445c2.085-0.002 3.775-1.692 3.778-3.778v-12.445c-0.002-2.085-1.692-3.775-3.778-3.778h-0zM17.556 13h-1.502l-1.439 4.316c-0.136 0.401-0.51 0.684-0.949 0.684s-0.812-0.283-0.947-0.677l-0.002-0.007-2.384-7.154-0.718 2.154c-0.137 0.401-0.51 0.684-0.949 0.684-0 0-0 0-0 0h-2.222c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h1.501l1.439-4.316c0.136-0.401 0.51-0.684 0.949-0.684s0.812 0.283 0.947 0.677l0.002 0.007 2.384 7.154 0.718-2.154c0.137-0.401 0.51-0.684 0.949-0.684 0 0 0 0 0 0h2.222c0.552 0 1 0.448 1 1s-0.448 1-1 1v0z"></path>
      </svg>
    );
  }
);

ActivityRoundFill.displayName = 'ActivityRoundFill';

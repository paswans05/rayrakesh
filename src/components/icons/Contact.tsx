import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Contact = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.438 3h-11c-1.38 0.001-2.499 1.12-2.5 2.5v1.5h-0.875c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h0.875v2h-0.875c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h0.875v2h-0.875c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h0.875v1.5c0.001 1.38 1.12 2.499 2.5 2.5h11c1.38-0.001 2.499-1.12 2.5-2.5v-13c-0.001-1.38-1.12-2.499-2.5-2.5h-0zM6.938 18.5v-1.5h0.125c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-0.125v-2h0.125c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-0.125v-2h0.125c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-0.125v-1.5c0-0.276 0.224-0.5 0.5-0.5h7.5v14h-7.5c-0.276-0-0.5-0.224-0.5-0.5v-0zM18.938 18.5c-0 0.276-0.224 0.5-0.5 0.5h-1.5v-14h1.5c0.276 0 0.5 0.224 0.5 0.5v0z"></path>
      </svg>
    );
  }
);

Contact.displayName = 'Contact';

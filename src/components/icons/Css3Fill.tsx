import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Css3Fill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20.143 2.5l-1.48 16.786-6.663 2.214-6.663-2.214-1.48-16.786zM6.864 5.893l0.246 2.006h5.212l-0.276 0.114-4.754 1.981 0.153 1.964 0.009-0.004v0.004l7.053 0.021-0.156 2.613-2.32 0.653-2.231-0.564-0.136-1.624h-2.074l0.271 3.134 4.19 1.238 4.165-1.217 0.543-6.217-4.716-0.004 4.89-2.091 0.204-2.006z"></path>
      </svg>
    );
  }
);

Css3Fill.displayName = 'Css3Fill';

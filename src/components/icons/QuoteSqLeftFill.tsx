import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const QuoteSqLeftFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M13.154 17.769v-8.461c0-0 0-0 0-0 0-2.549 2.066-4.615 4.615-4.615 0 0 0 0 0 0v0c0.421 0.005 0.761 0.347 0.761 0.769s-0.339 0.764-0.76 0.769h-0c-1.697 0.005-3.071 1.38-3.077 3.076v0.77h5.769c0 0 0 0 0 0 0.85 0 1.538 0.689 1.538 1.538 0 0 0 0 0 0v0 6.154c0 0 0 0 0 0 0 0.85-0.689 1.538-1.538 1.538-0 0-0 0-0 0h-5.769c-0 0-0 0-0 0-0.85 0-1.538-0.689-1.538-1.538 0-0 0-0 0-0v0zM3.538 19.308h5.769c0 0 0 0 0 0 0.85 0 1.538-0.689 1.538-1.538 0-0 0-0 0-0v0-6.154c0-0 0-0 0-0 0-0.85-0.689-1.538-1.538-1.538-0 0-0 0-0 0h-5.769v-0.769c0.005-1.697 1.38-3.071 3.076-3.077h0.001c0.421-0.005 0.761-0.347 0.761-0.769s-0.339-0.764-0.76-0.769h-0c-0 0-0 0-0 0-2.549 0-4.615 2.066-4.615 4.615 0 0 0 0 0 0v0 8.462c0 0 0 0 0 0 0 0.85 0.689 1.538 1.538 1.538 0 0 0 0 0 0v0z"></path>
      </svg>
    );
  }
);

QuoteSqLeftFill.displayName = 'QuoteSqLeftFill';

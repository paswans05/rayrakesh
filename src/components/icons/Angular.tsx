import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Angular = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20.813 5.656l-1.348 11.692-7.464 4.152-7.464-4.152-1.348-11.692 8.813-3.156zM12 4.6l-5.517 12.396h2.065l1.112-2.774h4.69l1.11 2.774h2.062zM12 8.628l1.616 3.885h-3.232z"></path>
      </svg>
    );
  }
);

Angular.displayName = 'Angular';

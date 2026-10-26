import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CopyFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M22 10.846v8.308c-0.002 1.571-1.275 2.844-2.846 2.846h-8.309c-1.571-0.002-2.844-1.275-2.846-2.846v-8.308c0.002-1.571 1.275-2.844 2.846-2.846h8.309c1.571 0.002 2.844 1.275 2.846 2.846v0zM5 14h-0.154c-0.467-0-0.846-0.379-0.846-0.846v-8.308c0-0.467 0.379-0.846 0.846-0.846h8.309c0.467 0 0.846 0.379 0.846 0.846v0.154c0 0.552 0.448 1 1 1s1-0.448 1-1v0-0.154c-0.002-1.571-1.275-2.844-2.846-2.846h-8.309c-1.571 0.002-2.844 1.275-2.846 2.846v8.308c0.002 1.571 1.275 2.844 2.846 2.846h0.154c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
      </svg>
    );
  }
);

CopyFill.displayName = 'CopyFill';

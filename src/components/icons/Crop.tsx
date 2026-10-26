import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Crop = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M22 16h-4v-7.235c-0.002-1.526-1.238-2.763-2.764-2.765h-7.236v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 4h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h4v7.235c0.002 1.526 1.238 2.763 2.764 2.765h7.236v4c0 0.552 0.448 1 1 1s1-0.448 1-1v0-4h4c0.552 0 1-0.448 1-1s-0.448-1-1-1v0zM8.765 16c-0.422-0.001-0.764-0.343-0.765-0.765v-7.235h7.235c0.422 0.001 0.764 0.343 0.765 0.765v7.235z"></path>
      </svg>
    );
  }
);

Crop.displayName = 'Crop';

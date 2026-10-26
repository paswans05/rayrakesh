import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CropAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17 22.98c-0.552 0-1-0.448-1-1v0-13.215c-0.001-0.422-0.343-0.764-0.765-0.765h-4.235c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h4.235c1.526 0.002 2.763 1.238 2.765 2.764v7.236h4c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-4v3.98c0 0.552-0.448 1-1 1v0zM14 17c0-0.552-0.448-1-1-1v0h-4.235c-0.422-0.001-0.764-0.343-0.765-0.765v-13.235c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 4h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h4v7.235c0.002 1.526 1.238 2.763 2.764 2.765h4.236c0.552 0 1-0.448 1-1v0z"></path>
      </svg>
    );
  }
);

CropAlt.displayName = 'CropAlt';

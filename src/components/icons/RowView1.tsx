import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const RowView1 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18 3h-12c-1.656 0.002-2.998 1.344-3 3v12c0.002 1.656 1.344 2.998 3 3h12c1.656-0.002 2.998-1.344 3-3v-12c-0.002-1.656-1.344-2.998-3-3h-0zM19 11.25h-14v-2.5h14zM5 12.75h14v2.5h-14zM6 5h12c0.552 0.001 0.999 0.448 1 1v1.25h-14v-1.25c0.001-0.552 0.448-0.999 1-1h0zM18 19h-12c-0.552-0.001-0.999-0.448-1-1v-1.25h14v1.25c-0.001 0.552-0.448 0.999-1 1h-0z"></path>
      </svg>
    );
  }
);

RowView1.displayName = 'RowView1';

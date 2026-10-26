import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const TrashEmpty = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M16.286 22h-8.571c-1.502-0.012-2.714-1.232-2.714-2.735 0-0.005 0-0.010 0-0.015v0.001-11.25h-1c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h3v-1c0.002-1.656 1.344-2.998 3-3h4c1.656 0.002 2.998 1.344 3 3v1h3c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-1v11.25c0 0.004 0 0.010 0 0.015 0 1.503-1.213 2.723-2.713 2.735h-0.001zM7 8v11.25c-0 0.005-0 0.011-0 0.016 0 0.399 0.318 0.723 0.714 0.734l0.001 0h8.571c0.397-0.011 0.715-0.335 0.715-0.734 0-0.006-0-0.011-0-0.017l0 0.001v-11.25zM9 6h6v-1c-0.001-0.552-0.448-0.999-1-1h-4c-0.552 0.001-0.999 0.448-1 1v0z"></path>
      </svg>
    );
  }
);

TrashEmpty.displayName = 'TrashEmpty';

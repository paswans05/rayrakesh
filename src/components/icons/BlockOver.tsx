import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const BlockOver = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19 8h-5v-3c-0.002-1.656-1.344-2.998-3-3h-6c-1.656 0.002-2.998 1.344-3 3v6c0.002 1.656 1.344 2.998 3 3h3v5c0.002 1.656 1.344 2.998 3 3h8c1.656-0.002 2.998-1.344 3-3v-8c-0.002-1.656-1.344-2.998-3-3h-0zM5 12c-0.552-0.001-0.999-0.448-1-1v-6c0.001-0.552 0.448-0.999 1-1h6c0.552 0.001 0.999 0.448 1 1v0l0.001 3h-2.001c-1.104 0.001-1.999 0.896-2 2v2zM12.002 12h-2.001v-2h2.001zM20 19c-0.001 0.552-0.448 0.999-1 1h-8c-0.552-0.001-0.999-0.448-1-1v-5h2c1.104-0.001 1.999-0.896 2-2v-2h5c0.552 0.001 0.999 0.448 1 1v0z"></path>
      </svg>
    );
  }
);

BlockOver.displayName = 'BlockOver';

import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Flickr = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M10.984 12c-0.001 2.204-1.788 3.991-3.992 3.991s-3.992-1.787-3.992-3.992 1.787-3.992 3.992-3.992c0 0 0.001 0 0.001 0h-0c2.204 0.001 3.991 1.788 3.991 3.993v0zM21 12c-0.001 2.204-1.788 3.991-3.992 3.991s-3.992-1.787-3.992-3.992 1.787-3.992 3.992-3.992c0 0 0.001 0 0.001 0h-0c2.204 0.001 3.991 1.788 3.991 3.993v0z"></path>
      </svg>
    );
  }
);

Flickr.displayName = 'Flickr';

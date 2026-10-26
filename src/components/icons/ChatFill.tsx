import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ChatFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19 2h-14c-1.656 0.002-2.998 1.344-3 3v16c0 0.552 0.448 1 1 1 0.276 0 0.526-0.112 0.707-0.293l3.707-3.707h11.586c1.656-0.002 2.998-1.344 3-3v-10c-0.002-1.656-1.344-2.998-3-3h-0zM7 11.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5v0c-0.001 0.828-0.672 1.499-1.5 1.5h-0zM12 11.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5v0c-0.001 0.828-0.672 1.499-1.5 1.5h-0zM17 11.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5v0c-0.001 0.828-0.672 1.499-1.5 1.5h-0z"></path>
      </svg>
    );
  }
);

ChatFill.displayName = 'ChatFill';

import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const VideoFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M22.424 6.095c-0.124-0.060-0.27-0.094-0.424-0.094-0.244 0-0.468 0.087-0.642 0.232l0.002-0.001-4.36 3.633v-2.151c-0.046-1.509-1.28-2.715-2.796-2.715-0.025 0-0.050 0-0.075 0.001l0.004-0h-10.267c-0.021-0.001-0.046-0.001-0.071-0.001-1.516 0-2.75 1.206-2.796 2.711l-0 0.004v8.572c0.046 1.509 1.28 2.715 2.796 2.715 0.025 0 0.050-0 0.075-0.001l-0.004 0h10.267c0.021 0.001 0.046 0.001 0.071 0.001 1.516 0 2.75-1.206 2.796-2.711l0-0.004v-2.151l4.36 3.633c0.172 0.144 0.396 0.232 0.64 0.232 0.552 0 1-0.448 1-1 0-0 0-0 0-0v0-10c-0-0.398-0.233-0.742-0.57-0.903l-0.006-0.003z"></path>
      </svg>
    );
  }
);

VideoFill.displayName = 'VideoFill';

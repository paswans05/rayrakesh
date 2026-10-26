import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const FlickrRound = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21.013 5.986v12.027c0 1.657-1.343 3-3 3v0h-12.026c-1.657 0-3-1.343-3-3v0-12.027c0-1.657 1.343-3 3-3v0h12.026c1.657 0 3 1.343 3 3v0zM11.356 11.98c-0-1.411-1.144-2.555-2.555-2.555s-2.555 1.144-2.555 2.555 1.144 2.555 2.555 2.555c0 0 0 0 0.001 0h-0c0 0 0.001 0 0.002 0 1.41 0 2.553-1.143 2.553-2.553 0-0.001 0-0.002 0-0.003v0zM17.754 11.98c-0-1.411-1.144-2.555-2.555-2.555s-2.555 1.144-2.555 2.555c0 1.411 1.144 2.555 2.555 2.555h0c0 0 0.001 0 0.002 0 1.411 0 2.554-1.143 2.554-2.554 0-0.001 0-0.001 0-0.002v0z"></path>
      </svg>
    );
  }
);

FlickrRound.displayName = 'FlickrRound';

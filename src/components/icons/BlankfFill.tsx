import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const BlankfFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.2 4h-10.4c-0.007-0-0.014-0-0.022-0-1.524 0-2.762 1.228-2.778 2.749l-0 0.002v10.5c0.016 1.522 1.254 2.75 2.778 2.75 0.008 0 0.015-0 0.023-0h6.799c0.271-0 0.517-0.108 0.698-0.283l-0 0 5.4-5.25c0.187-0.182 0.303-0.436 0.303-0.717 0 0 0-0 0-0v0-7c-0.016-1.522-1.254-2.75-2.778-2.75-0.008 0-0.015 0-0.023 0h0.001zM13 18v-5h5z"></path>
      </svg>
    );
  }
);

BlankfFill.displayName = 'BlankfFill';

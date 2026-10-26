import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const BlankAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.2 4h-10.4c-0.007-0-0.014-0-0.022-0-1.524 0-2.762 1.228-2.778 2.749l-0 0.002v10.5c0.016 1.522 1.254 2.75 2.778 2.75 0.008 0 0.015-0 0.023-0h6.799c0.271-0 0.517-0.108 0.698-0.283l-0 0 5.4-5.25c0.187-0.182 0.303-0.436 0.303-0.717 0 0 0-0 0-0v0-7c-0.016-1.522-1.254-2.75-2.778-2.75-0.008 0-0.015 0-0.023 0h0.001zM6.8 18c-0.007 0-0.015 0-0.023 0-0.42 0-0.762-0.333-0.777-0.749l-0-0.001v-10.5c0.015-0.418 0.357-0.75 0.777-0.75 0.008 0 0.016 0 0.025 0l-0.001-0h10.4c0.007-0 0.015-0 0.023-0 0.42 0 0.762 0.333 0.777 0.749l0 0.001v6.25h-3c-1.104 0.001-1.999 0.896-2 2v3z"></path>
      </svg>
    );
  }
);

BlankAlt.displayName = 'BlankAlt';

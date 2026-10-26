import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const LabelAltFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 21c-4.971 0-9-4.029-9-9s4.029-9 9-9c4.971 0 9 4.029 9 9v0c-0.006 4.968-4.032 8.994-8.999 9h-0.001zM12 7c-2.761 0-5 2.239-5 5s2.239 5 5 5c2.761 0 5-2.239 5-5v0c-0.003-2.76-2.24-4.997-5-5h-0zM12 10c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"></path>
      </svg>
    );
  }
);

LabelAltFill.displayName = 'LabelAltFill';

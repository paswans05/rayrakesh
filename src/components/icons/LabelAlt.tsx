import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const LabelAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 21c-4.971 0-9-4.029-9-9s4.029-9 9-9c4.971 0 9 4.029 9 9v0c-0.006 4.968-4.032 8.994-8.999 9h-0.001zM12 7c-2.761 0-5 2.239-5 5s2.239 5 5 5c2.761 0 5-2.239 5-5v0c-0.003-2.76-2.24-4.997-5-5h-0z"></path>
      </svg>
    );
  }
);

LabelAlt.displayName = 'LabelAlt';

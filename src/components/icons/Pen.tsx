import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Pen = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M2.916 22.001c-0.506-0-0.916-0.41-0.916-0.916 0-0.086 0.012-0.169 0.034-0.247l-0.002 0.006 1.374-5.040c0.045-0.16 0.127-0.297 0.236-0.407l12.37-12.37c0.635-0.639 1.515-1.034 2.487-1.034 1.937 0 3.508 1.571 3.508 3.508 0 0.972-0.395 1.852-1.034 2.487l-12.37 12.37c-0.11 0.11-0.247 0.192-0.401 0.235l-0.006 0.002-5.040 1.374c-0.072 0.020-0.155 0.032-0.24 0.033h-0zM5.53 16.241l-0.836 3.064 3.065-0.835 11.475-11.475c0.285-0.285 0.462-0.679 0.462-1.114 0-0.87-0.706-1.576-1.576-1.576-0.435 0-0.829 0.176-1.114 0.462v0zM7.955 19.71v0z"></path>
      </svg>
    );
  }
);

Pen.displayName = 'Pen';

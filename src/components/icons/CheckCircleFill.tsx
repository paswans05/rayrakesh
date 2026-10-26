import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CheckCircleFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM16.737 9.676l-5.5 6c-0.183 0.2-0.446 0.324-0.737 0.324s-0.554-0.125-0.737-0.324l-0.001-0.001-2.5-2.727c-0.163-0.177-0.263-0.415-0.263-0.676 0-0.552 0.448-1 1-1 0.291 0 0.554 0.125 0.737 0.324l0.001 0.001 1.763 1.923 4.763-5.196c0.183-0.2 0.446-0.324 0.737-0.324 0.552 0 1 0.448 1 1 0 0.261-0.1 0.498-0.264 0.677l0.001-0.001z"></path>
      </svg>
    );
  }
);

CheckCircleFill.displayName = 'CheckCircleFill';

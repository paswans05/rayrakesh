import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ClockFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 3c-4.971 0-9 4.029-9 9s4.029 9 9 9c4.971 0 9-4.029 9-9v0c-0.006-4.968-4.032-8.994-8.999-9h-0.001zM16.016 13.572c-0.153 0.368-0.509 0.622-0.924 0.622-0.137 0-0.268-0.028-0.387-0.078l0.007 0.002-3.182-1.302c-0.367-0.153-0.621-0.51-0.621-0.925v0-4.698c0-0.552 0.448-1 1-1s1 0.448 1 1v0 4.026l2.56 1.048c0.368 0.153 0.622 0.509 0.622 0.925 0 0.137-0.027 0.267-0.077 0.386l0.002-0.007z"></path>
      </svg>
    );
  }
);

ClockFill.displayName = 'ClockFill';

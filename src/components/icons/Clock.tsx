import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Clock = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 21c-4.971 0-9-4.029-9-9s4.029-9 9-9c4.971 0 9 4.029 9 9v0c-0.006 4.968-4.032 8.994-8.999 9h-0.001zM12 5c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.866 0 7-3.134 7-7v0c-0.005-3.864-3.136-6.995-7-7h-0zM16.017 13.572c0.047-0.112 0.074-0.242 0.074-0.379 0-0.416-0.254-0.772-0.615-0.923l-0.007-0.002-2.56-1.048v-4.026c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 4.698c0 0.416 0.254 0.772 0.615 0.923l0.007 0.002 3.182 1.302c0.112 0.048 0.243 0.075 0.38 0.075 0.416 0 0.772-0.254 0.922-0.615l0.002-0.007z"></path>
      </svg>
    );
  }
);

Clock.displayName = 'Clock';

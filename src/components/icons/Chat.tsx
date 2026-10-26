import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Chat = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M3 22c-0.552 0-1-0.448-1-1v0-16c0.002-1.656 1.344-2.998 3-3h14c1.656 0.002 2.998 1.344 3 3v10c-0.002 1.656-1.344 2.998-3 3h-11.586l-3.707 3.707c-0.181 0.181-0.431 0.293-0.707 0.293-0 0-0 0-0 0h0zM5 4c-0.552 0.001-0.999 0.448-1 1v13.586l2.293-2.293c0.181-0.181 0.431-0.293 0.707-0.293h12c0.552-0.001 0.999-0.448 1-1v-10c-0.001-0.552-0.448-0.999-1-1h-0zM12 11c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1v0c-0.001 0.552-0.448 0.999-1 1h-0zM16 11c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1v0c-0.001 0.552-0.448 0.999-1 1h-0zM8 11c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1v0c-0.001 0.552-0.448 0.999-1 1h-0z"></path>
      </svg>
    );
  }
);

Chat.displayName = 'Chat';

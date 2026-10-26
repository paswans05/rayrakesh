import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ReplyFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21.961 17.723c-0.274-0.951-0.586-1.76-0.957-2.534l0.042 0.097c-1.749-3.932-5.621-6.624-10.122-6.624-0.086 0-0.171 0.001-0.257 0.003l0.013-0v-2.665c0-0 0-0 0-0 0-0.552-0.448-1-1-1-0.257 0-0.492 0.097-0.669 0.257l0.001-0.001-6.68 6c-0.204 0.184-0.331 0.449-0.331 0.744 0 0.308 0.14 0.584 0.359 0.768l0.002 0.001 6.68 5.553c0.172 0.144 0.395 0.231 0.639 0.231 0.552 0 1-0.447 1-1v-2.653c5.405 0.108 8.091 1.964 9.422 3.563 0.035 0.051 0.071 0.102 0.114 0.157 0.185 0.233 0.468 0.38 0.785 0.38 0.552 0 1-0.448 1-1 0-0.099-0.014-0.195-0.041-0.285l0.002 0.007z"></path>
      </svg>
    );
  }
);

ReplyFill.displayName = 'ReplyFill';

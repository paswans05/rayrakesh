import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Mail = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20 3h-16c-1.656 0.002-2.998 1.344-3 3v12c0.002 1.656 1.344 2.998 3 3h16c1.656-0.002 2.998-1.344 3-3v-12c-0.002-1.656-1.344-2.998-3-3h-0zM4 5h16c0.388 0.003 0.722 0.228 0.883 0.553l0.003 0.006-8.886 6.22-8.886-6.22c0.164-0.332 0.498-0.556 0.886-0.559h0zM20 19h-16c-0.552-0.001-0.999-0.448-1-1v-10.079l8.427 5.899c0.16 0.113 0.359 0.181 0.573 0.181s0.413-0.068 0.576-0.183l-0.003 0.002 8.427-5.899v10.079c-0.001 0.552-0.448 0.999-1 1h-0z"></path>
      </svg>
    );
  }
);

Mail.displayName = 'Mail';

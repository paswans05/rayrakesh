import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Headphone = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 2c-5.52 0.007-9.993 4.48-10 9.999v7.001c0.002 1.656 1.344 2.998 3 3h1c1.656-0.002 2.998-1.344 3-3v-3c-0.002-1.656-1.344-2.998-3-3h-2v-1c0-4.418 3.582-8 8-8s8 3.582 8 8v0 1h-2c-1.656 0.002-2.998 1.344-3 3v3c0.002 1.656 1.344 2.998 3 3h1c1.656-0.002 2.998-1.344 3-3v-7c-0.007-5.52-4.48-9.993-9.999-10h-0.001zM6 15c0.552 0 1 0.448 1 1v3c-0 0.552-0.448 1-1 1h-1c-0.552-0-1-0.448-1-1v-4zM20 19c-0 0.552-0.448 1-1 1h-1c-0.552-0-1-0.448-1-1v-3c0-0.552 0.448-1 1-1h2v4z"></path>
      </svg>
    );
  }
);

Headphone.displayName = 'Headphone';

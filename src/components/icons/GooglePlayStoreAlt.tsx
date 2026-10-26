import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const GooglePlayStoreAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20.731 11.284c-0.131-0.217-0.312-0.392-0.529-0.512l-0.007-0.004-14.972-8.58c-0.206-0.119-0.452-0.189-0.715-0.189-0.269 0-0.522 0.074-0.738 0.202l0.007-0.004c-0.425 0.248-0.705 0.702-0.705 1.221 0 0.001 0 0.001 0 0.002v-0 17.159c0.005 0.785 0.643 1.419 1.428 1.419 0 0 0 0 0 0v0c0.265-0.001 0.514-0.070 0.731-0.191l-0.008 0.004 14.972-8.58c0.44-0.242 0.733-0.703 0.733-1.232 0-0.265-0.073-0.512-0.201-0.723l0.004 0.006zM14.776 9.305l-1.687 1.687-6.187-6.196zM6.902 19.197l6.187-6.187 1.687 1.687zM16.053 13.957l-1.955-1.955 1.955-1.955 3.428 1.955z"></path>
      </svg>
    );
  }
);

GooglePlayStoreAlt.displayName = 'GooglePlayStoreAlt';

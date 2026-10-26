import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const TemplateFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20 21h-16c-1.656-0.002-2.998-1.344-3-3v-12c0.002-1.656 1.344-2.998 3-3h16c1.656 0.002 2.998 1.344 3 3v12c-0.002 1.656-1.344 2.998-3 3h-0zM4 5c-0.552 0.001-0.999 0.448-1 1v12c0.001 0.552 0.448 0.999 1 1h16c0.552-0.001 0.999-0.448 1-1v-12c-0.001-0.552-0.448-0.999-1-1h-0zM18.503 6.25h-13.006c-0.274 0-0.497 0.222-0.497 0.497v0 1.006c0 0.274 0.222 0.497 0.497 0.497v0h13.006c0.274 0 0.497-0.222 0.497-0.497v0-1.006c0-0.274-0.222-0.497-0.497-0.497v0zM10 17.75h-4c-0.414 0-0.75-0.336-0.75-0.75v0-6c0-0.414 0.336-0.75 0.75-0.75v0h4c0.414 0 0.75 0.336 0.75 0.75v0 6c0 0.414-0.336 0.75-0.75 0.75v0zM18 17.75h-4c-0.414 0-0.75-0.336-0.75-0.75v0-6c0-0.414 0.336-0.75 0.75-0.75v0h4c0.414 0 0.75 0.336 0.75 0.75v0 6c0 0.414-0.336 0.75-0.75 0.75v0z"></path>
      </svg>
    );
  }
);

TemplateFill.displayName = 'TemplateFill';

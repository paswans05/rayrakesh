import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Check = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M9 19c-0.291-0-0.554-0.125-0.737-0.323l-0.001-0.001-5-5.455c-0.163-0.177-0.263-0.415-0.263-0.676 0-0.552 0.448-1 1-1 0.291 0 0.554 0.125 0.737 0.324l0.001 0.001 4.263 4.65 10.263-11.196c0.183-0.2 0.446-0.324 0.737-0.324 0.552 0 1 0.448 1 1 0 0.261-0.1 0.498-0.264 0.677l0.001-0.001-11 12c-0.184 0.2-0.446 0.324-0.737 0.324v0z"></path>
      </svg>
    );
  }
);

Check.displayName = 'Check';

import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Vue = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.526 2.579h-3.776l-2.75 4.351-2.357-4.351h-8.643l11 18.842 11-18.842zM3.735 4.15h2.642l5.623 9.733 5.618-9.733h2.642l-8.26 14.153z"></path>
      </svg>
    );
  }
);

Vue.displayName = 'Vue';

import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Blackberry = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M7.128 11.648c0 1.104-0.705 2.11-3.116 2.11h-3.013l0.903-3.816h2.914c1.809 0 2.312 1.006 2.312 1.706zM5.019 8.132h-3.013l0.903-3.816h2.914c1.809 0 2.312 1.001 2.312 1.706 0 1.006-0.705 2.11-3.116 2.11zM13.657 17.574c0 1.006-0.602 2.11-3.013 2.11h-3.013l0.804-3.816h2.914c1.809 0 2.312 1.006 2.308 1.706zM14.865 11.648c0 1.104-0.7 2.11-3.013 2.11h-3.013l0.804-3.816h2.914c1.805 0 2.308 1.006 2.308 1.706zM15.866 6.022c0 1.006-0.701 2.11-3.013 2.11h-3.013l0.804-3.816h2.914c1.81 0 2.313 1.002 2.308 1.706zM21.797 15.262c0 1.104-0.602 2.11-3.013 2.11h-3.013l0.804-3.816h2.914c1.809 0 2.308 1.006 2.308 1.706zM23 9.335c0 1.104-0.701 2.11-3.013 2.11h-3.013l0.804-3.816h2.914c1.809 0 2.312 1.006 2.308 1.706z"></path>
      </svg>
    );
  }
);

Blackberry.displayName = 'Blackberry';

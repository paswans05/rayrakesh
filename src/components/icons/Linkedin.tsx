import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Linkedin = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M3 5.162c0.012-1.185 0.975-2.141 2.161-2.141 1.194 0 2.161 0.968 2.161 2.161s-0.968 2.161-2.161 2.161v0c-1.194-0.001-2.161-0.969-2.161-2.163 0-0.007 0-0.014 0-0.021v0.001zM3.297 21v-12.018h3.732v12.018zM17.272 21v-5.85c0-1.394-0.028-3.182-1.94-3.182-1.94 0-2.238 1.515-2.238 3.081v5.951h-3.728v-12.018h3.579v1.64h0.052c0.693-1.171 1.95-1.944 3.387-1.944 0.051 0 0.101 0.001 0.152 0.003l-0.007-0c3.777 0 4.471 2.488 4.471 5.718v6.602h-3.728z"></path>
      </svg>
    );
  }
);

Linkedin.displayName = 'Linkedin';

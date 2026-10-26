import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Shield = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 22c-0.167-0-0.324-0.041-0.463-0.113l0.006 0.003c-0.308-0.159-7.542-3.948-7.542-9.89v-6.3c0-0 0-0 0-0 0-0.423 0.262-0.784 0.633-0.93l0.007-0.002 7-2.7c0.107-0.043 0.23-0.067 0.36-0.067s0.253 0.025 0.367 0.070l-0.007-0.002 7 2.7c0.378 0.148 0.64 0.51 0.64 0.933 0 0 0 0 0 0v0 6.3c0 5.942-7.235 9.731-7.542 9.89-0.133 0.069-0.291 0.11-0.457 0.11v0zM6 6.387v5.613c0 3.983 4.524 6.981 5.999 7.852 1.474-0.874 6.001-3.882 6.001-7.853v-5.613l-6-2.314z"></path>
      </svg>
    );
  }
);

Shield.displayName = 'Shield';

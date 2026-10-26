import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Col2s = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19 3h-14c-1.104 0.001-1.999 0.896-2 2v14c0.001 1.104 0.896 1.999 2 2h14c1.104-0.001 1.999-0.896 2-2v-14c-0.001-1.104-0.896-1.999-2-2h-0zM5 5h6v14h-6zM13 19v-14h6l0.002 14z"></path>
      </svg>
    );
  }
);

Col2s.displayName = 'Col2s';

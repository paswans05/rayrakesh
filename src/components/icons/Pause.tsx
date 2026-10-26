import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Pause = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M9 18h-2c-1.104-0.001-1.999-0.896-2-2v-8c0.001-1.104 0.896-1.999 2-2h2c1.104 0.001 1.999 0.896 2 2v8c-0.001 1.104-0.896 1.999-2 2h-0zM7 8v8h2v-8zM17 18h-2c-1.104-0.001-1.999-0.896-2-2v-8c0.001-1.104 0.896-1.999 2-2h2c1.104 0.001 1.999 0.896 2 2v8c-0.001 1.104-0.896 1.999-2 2h-0zM15 8v8h2v-8z"></path>
      </svg>
    );
  }
);

Pause.displayName = 'Pause';

import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Music = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21.646 2.237c-0.174-0.147-0.401-0.237-0.648-0.237-0.057 0-0.114 0.005-0.169 0.014l0.006-0.001-12 2c-0.477 0.082-0.835 0.492-0.835 0.986 0 0 0 0 0 0v-0 9.556c-0.572-0.346-1.261-0.552-1.999-0.556h-0.001c-2.209 0-4 1.791-4 4s1.791 4 4 4c2.209 0 4-1.791 4-4v0-12.153l10-1.666v8.376c-0.572-0.346-1.261-0.552-1.999-0.556h-0.001c-2.209 0-4 1.791-4 4s1.791 4 4 4c2.209 0 4-1.791 4-4v0-13c0-0 0-0 0-0 0-0.305-0.137-0.578-0.352-0.761l-0.001-0.001zM6 20c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2v0c-0.001 1.104-0.896 1.999-2 2h-0zM18 18c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2v0c-0.001 1.104-0.896 1.999-2 2h-0z"></path>
      </svg>
    );
  }
);

Music.displayName = 'Music';

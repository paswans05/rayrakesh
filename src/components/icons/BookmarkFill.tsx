import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const BookmarkFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.565 3.491c-0.671-0.292-1.451-0.471-2.271-0.491l-0.008-0h-6.572c-0.342 0-2.725 0.278-3.248 1.493-0.275 0.675-0.444 1.457-0.466 2.277l-0 0.009v12.222c-0.002 0.029-0.003 0.062-0.003 0.096 0 0.57 0.315 1.066 0.781 1.324l0.008 0.004c0.187 0.089 0.406 0.14 0.637 0.14 0.373 0 0.715-0.135 0.979-0.358l-0.002 0.002 4.392-3.254c0.061-0.031 0.132-0.050 0.208-0.050s0.148 0.018 0.211 0.051l-0.003-0.001 4.394 3.254c0.274 0.216 0.623 0.35 1.002 0.36l0.002 0c0 0 0 0 0 0 0.222 0 0.432-0.054 0.616-0.149l-0.008 0.004c0.473-0.262 0.788-0.758 0.788-1.328 0-0.034-0.001-0.067-0.003-0.1l0 0.005v-12.222c0-0.026-0.175-2.702-1.435-3.287z"></path>
      </svg>
    );
  }
);

BookmarkFill.displayName = 'BookmarkFill';

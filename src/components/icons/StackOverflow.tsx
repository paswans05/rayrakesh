import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const StackOverflow = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.522 14.714h1.696v6.786h-15.246v-6.786h1.696v5.089h11.854zM15.838 18.094h-8.482v-1.684h8.482zM15.838 15.986l-8.3-1.738 0.348-1.667 8.3 1.752zM16.313 13.866l-7.684-3.584 0.708-1.548 7.69 3.592zM17.267 11.95l-6.509-5.442 1.081-1.306 6.51 5.442zM20.028 9.298l-1.358 1.018-5.059-6.798 1.357-1.018z"></path>
      </svg>
    );
  }
);

StackOverflow.displayName = 'StackOverflow';

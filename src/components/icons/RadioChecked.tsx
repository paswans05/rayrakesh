import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const RadioChecked = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12.011 2c5.518 0.006 9.989 4.481 9.989 10 0 5.523-4.477 10-10 10s-10-4.477-10-10c0-0.004 0-0.008 0-0.011v0.001c0.003-5.518 4.477-9.989 9.995-9.989 0.006 0 0.011 0 0.017 0h-0.001zM3.993 11.986c0 0.004 0 0.009 0 0.013 0 4.422 3.585 8.007 8.007 8.007s8.007-3.585 8.007-8.007c0-4.415-3.573-7.995-7.986-8.007h-0.001c-0.002 0-0.004 0-0.007 0-4.42 0-8.005 3.575-8.020 7.992v0.001zM6.999 11.84c-0.002 0.048-0.003 0.104-0.003 0.16 0 2.764 2.24 5.004 5.004 5.004s5.004-2.24 5.004-5.004c0-2.711-2.156-4.919-4.848-5.002l-0.008-0c-0.041-0.001-0.090-0.002-0.139-0.002-2.709 0-4.917 2.149-5.011 4.835l-0 0.009z"></path>
      </svg>
    );
  }
);

RadioChecked.displayName = 'RadioChecked';

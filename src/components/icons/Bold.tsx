import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Bold = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.907 14.991c-0.364-1.953-1.857-3.478-3.763-3.884l-0.032-0.006c0.557-0.87 0.888-1.932 0.888-3.071 0-0.011-0-0.022-0-0.033v0.002c0-2.757-1.794-5-4-5h-6c-0.552 0-1 0.448-1 1v0 16c0 0.552 0.448 1 1 1v0h8.308c1.414-0.011 2.673-0.661 3.505-1.675l0.006-0.008c0.738-0.896 1.185-2.056 1.185-3.32 0-0.356-0.036-0.704-0.103-1.040l0.006 0.034zM7 5h5c1.084 0 2 1.374 2 3s-0.916 3-2 3h-5zM16.282 18.038c-0.467 0.583-1.177 0.955-1.974 0.962h-7.309v-6h7.169c1.385 0.015 2.532 1.018 2.769 2.337l0.003 0.017c0.041 0.193 0.064 0.414 0.064 0.641 0 0.776-0.272 1.489-0.726 2.048l0.005-0.006z"></path>
      </svg>
    );
  }
);

Bold.displayName = 'Bold';

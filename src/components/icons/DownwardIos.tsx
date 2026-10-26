import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const DownwardIos = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 17.5c-0 0-0.001 0-0.001 0-0.276 0-0.525-0.112-0.706-0.293l-9-9c-0.188-0.182-0.305-0.437-0.305-0.719 0-0.552 0.448-1 1-1 0.282 0 0.537 0.117 0.719 0.305l8.293 8.293 8.293-8.293c0.182-0.188 0.437-0.305 0.719-0.305 0.552 0 1 0.448 1 1 0 0.282-0.117 0.537-0.305 0.719l-9 9c-0.18 0.181-0.43 0.293-0.706 0.293-0 0-0.001 0-0.001 0h0z"></path>
      </svg>
    );
  }
);

DownwardIos.displayName = 'DownwardIos';

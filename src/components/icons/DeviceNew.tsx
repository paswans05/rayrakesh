import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const DeviceNew = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12.9 13.78l-0.11-0.11v-1.54h-3.39v1.54l-0.11 0.11c-0.51 0.5-0.79 1.16-0.79 1.86s0.28 1.36 0.79 1.86l0.11 0.11v1.54h3.39v-1.54l0.11-0.11c0.51-0.49 0.8-1.17 0.8-1.86s-0.29-1.37-0.8-1.86zM11.090 17.13c-0.82 0-1.49-0.67-1.49-1.49s0.67-1.49 1.49-1.49 1.49 0.67 1.49 1.49-0.67 1.49-1.49 1.49zM20.060 6.42h-16.37v11.16h3.64v1.57h-3.51c-0.93 0-1.69-0.76-1.69-1.69v-10.91c0-0.93 0.76-1.69 1.69-1.69h16.24v1.57zM21.090 8.49h-5.45c-0.39 0-0.78 0.4-0.78 0.78v9.090c0 0.39 0.4 0.78 0.78 0.78h5.45c0.39 0 0.78-0.4 0.78-0.78v-9.090c0-0.39-0.4-0.78-0.78-0.78zM20.31 17.58h-3.89v-7.52h3.89v7.52z"></path>
      </svg>
    );
  }
);

DeviceNew.displayName = 'DeviceNew';

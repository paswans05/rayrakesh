import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Megento = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20.658 16.997l-2.476 1.425v-9.99l-6.191-3.578-6.194 3.577 0.016 9.994-2.472-1.429v-9.994l8.666-5.003 8.65 4.995zM13.234 8.428l2.476 1.429v9.998l-3.714 2.144-3.706-2.144-0.004-9.994 2.472-1.429v9.998l1.242 0.711 1.234-0.718z"></path>
      </svg>
    );
  }
);

Megento.displayName = 'Megento';

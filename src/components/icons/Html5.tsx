import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Html5 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20.143 2.5l-1.48 16.786-6.684 2.214-6.642-2.214-1.48-16.786zM17.115 5.901h-10.225l0.543 6.175h7.078l-0.254 2.638-2.277 0.615-2.269-0.615-0.148-1.616h-2.023l0.255 3.215 4.186 1.158h0.047v-0.013l4.152-1.145 0.577-6.294h-7.447l-0.174-2.095h7.795z"></path>
      </svg>
    );
  }
);

Html5.displayName = 'Html5';

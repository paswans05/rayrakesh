import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const MailFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M1.426 4.484c0.527-0.891 1.481-1.481 2.574-1.484h16.001c1.096 0.003 2.053 0.596 2.57 1.477l0.008 0.014-10.578 7.288zM12.573 13.819c-0.16 0.113-0.359 0.181-0.573 0.181s-0.413-0.068-0.576-0.183l0.003 0.002-10.427-7.198v11.379c0.002 1.656 1.344 2.998 3 3h16c1.656-0.002 2.998-1.344 3-3v-11.37z"></path>
      </svg>
    );
  }
);

MailFill.displayName = 'MailFill';

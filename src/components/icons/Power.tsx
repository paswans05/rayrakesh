import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Power = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M11.995 21.887c-0.002 0-0.005 0-0.007 0-4.968 0-8.995-4.027-8.995-8.995 0-2.485 1.008-4.735 2.637-6.363l0-0c0.18-0.175 0.425-0.282 0.696-0.282 0.552 0 1 0.448 1 1 0 0.271-0.108 0.516-0.282 0.697l0-0c-1.266 1.267-2.049 3.016-2.049 4.949 0 3.866 3.134 7 7 7s7-3.134 7-7c0-1.933-0.783-3.682-2.049-4.949l0 0c-0.186-0.182-0.302-0.435-0.302-0.716 0-0.552 0.448-1 1-1 0.281 0 0.534 0.116 0.716 0.302l0 0c1.63 1.628 2.638 3.878 2.638 6.363 0 4.967-4.027 8.994-8.994 8.994-0.003 0-0.005 0-0.008 0h0zM13 13v-10c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 10c0 0.552 0.448 1 1 1s1-0.448 1-1v0z"></path>
      </svg>
    );
  }
);

Power.displayName = 'Power';

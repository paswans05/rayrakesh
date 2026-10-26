import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Css3 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.071 17.786l-8.971 3.214-7.743-3.214 0.788-3.809h3.295l-0.321 1.631 4.677 1.784 5.388-1.784 0.755-3.901h-13.395l0.643-3.295h13.408l0.422-2.118h-13.395l0.655-3.295h16.369z"></path>
      </svg>
    );
  }
);

Css3.displayName = 'Css3';

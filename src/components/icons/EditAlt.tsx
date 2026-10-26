import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const EditAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21 22h-9c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h9c0.552 0 1 0.448 1 1s-0.448 1-1 1v0zM3.242 21.97l4-1c0.183-0.047 0.34-0.138 0.465-0.263l12.5-12.5c0.564-0.565 0.913-1.345 0.913-2.207s-0.349-1.642-0.913-2.207l0 0c-0.573-0.548-1.35-0.885-2.207-0.885s-1.634 0.337-2.208 0.886l0.001-0.001-12.5 12.5c-0.124 0.124-0.216 0.282-0.261 0.457l-0.002 0.007-1 4c-0.019 0.073-0.030 0.156-0.030 0.243 0 0.552 0.448 1 1 1 0.086 0 0.169-0.011 0.249-0.031l-0.007 0.002zM17.207 5.207v0c0.206-0.197 0.485-0.318 0.793-0.318s0.587 0.121 0.793 0.318l-0-0c0.202 0.203 0.327 0.484 0.327 0.793s-0.125 0.59-0.327 0.793l-12.305 12.304-2.114 0.528 0.529-2.114zM16.5 4.5v0z"></path>
      </svg>
    );
  }
);

EditAlt.displayName = 'EditAlt';

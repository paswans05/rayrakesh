import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CapsuleFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M14.292 16.485l-3.114 2.485c-0.806 0.646-1.84 1.036-2.966 1.036-1.5 0-2.839-0.694-3.712-1.778l-0.007-0.009-0.223-0.28c-0.646-0.806-1.036-1.84-1.036-2.965 0-1.501 0.694-2.839 1.779-3.712l0.009-0.007 3.114-2.485zM19.73 6.062l-0.223-0.28c-0.88-1.094-2.219-1.788-3.719-1.788-1.126 0-2.16 0.391-2.976 1.044l0.009-0.007-3.122 2.491 6.156 7.716 3.122-2.491c1.094-0.88 1.788-2.218 1.788-3.719 0-1.126-0.391-2.16-1.043-2.975l0.007 0.009z"></path>
      </svg>
    );
  }
);

CapsuleFill.displayName = 'CapsuleFill';

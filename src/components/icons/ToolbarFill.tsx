import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ToolbarFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M1 13.017v-7.017c0.002-1.656 1.344-2.998 3-3h16c1.656 0.002 2.998 1.344 3 3v7.017c-0.032-0.003-0.059-0.017-0.091-0.017h-21.818c-0.032 0-0.059 0.014-0.091 0.017zM23 14.983v3.017c-0.002 1.656-1.344 2.998-3 3h-16c-1.656-0.002-2.998-1.344-3-3v-3.017c0.032 0.003 0.059 0.017 0.091 0.017h21.818c0.032 0 0.059-0.014 0.091-0.017zM12 17h-8v2h8zM16 17h-2v2h2zM20 17h-2v2h2z"></path>
      </svg>
    );
  }
);

ToolbarFill.displayName = 'ToolbarFill';

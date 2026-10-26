import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const PlusMediFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.556 8.667h-4.223v-4.222c-0.001-0.797-0.647-1.444-1.444-1.444h-3.777c-0.797 0.001-1.444 0.647-1.444 1.444v4.222h-4.223c-0.798 0.001-1.444 0.647-1.444 1.445v3.777c0.001 0.798 0.647 1.444 1.444 1.445h4.223v4.222c0.001 0.797 0.647 1.444 1.444 1.444h3.777c0.797-0.001 1.444-0.647 1.444-1.444v-4.222h4.223c0.798-0.001 1.444-0.647 1.444-1.445v-3.777c-0.001-0.798-0.647-1.444-1.444-1.445h-0z"></path>
      </svg>
    );
  }
);

PlusMediFill.displayName = 'PlusMediFill';

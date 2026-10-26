import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignPlnAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c6.627 0 12-5.373 12-12v0c0-6.627-5.373-12-12-12v0zM12.995 12.253l-4.863 4.674h4.863v1.074h-6.474v-1.042l4.958-4.674h-4.958v-1.074h6.474zM17.479 13.516l-1.326 1.326v3.158h-1.074v-2.084l-1.326 1.326v-1.516l1.326-1.326v-8.4h1.074v7.326l1.326-1.326z"></path>
      </svg>
    );
  }
);

SignPlnAlt.displayName = 'SignPlnAlt';

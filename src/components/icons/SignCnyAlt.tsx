import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignCnyAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c6.627 0 12-5.373 12-12v0c0-6.627-5.373-12-12-12v0zM15.546 11.277v1.042h-2.717v1.693h2.717v1.042h-2.717v2.946h-1.657v-2.946h-2.717v-1.042h2.717v-1.693h-2.717v-1.042h2.064l-3.034-5.277h1.892l2.623 4.938 2.677-4.938h1.84l-3.033 5.277z"></path>
      </svg>
    );
  }
);

SignCnyAlt.displayName = 'SignCnyAlt';

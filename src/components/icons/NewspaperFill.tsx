import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const NewspaperFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20.571 4.857h-14.286c-0.789 0-1.428 0.64-1.429 1.429v0 10.714c-0.005 0.391-0.323 0.706-0.714 0.706s-0.709-0.315-0.714-0.705v-8.572c0-0.394-0.32-0.714-0.714-0.714s-0.714 0.32-0.714 0.714v0 8.571c0 1.183 0.959 2.143 2.143 2.143v0h15.714c1.181-0.005 2.138-0.961 2.143-2.142v-10.715c-0-0.789-0.64-1.429-1.429-1.429v0zM17 14.143h-7.143c-0.395 0-0.714-0.32-0.714-0.714s0.32-0.714 0.714-0.714h7.143c0.395 0 0.714 0.32 0.714 0.714s-0.32 0.714-0.714 0.714v0zM17 11.286h-7.143c-0.395 0-0.714-0.32-0.714-0.714s0.32-0.714 0.714-0.714h7.143c0.395 0 0.714 0.32 0.714 0.714s-0.32 0.714-0.714 0.714v0z"></path>
      </svg>
    );
  }
);

NewspaperFill.displayName = 'NewspaperFill';

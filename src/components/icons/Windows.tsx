import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Windows = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M10 4.462v6.538h-7v-5.521zM3 13h7v6.538l-7-1.017zM21 3v8h-9v-6.646zM12 13h9v8l-9-1.354z"></path>
      </svg>
    );
  }
);

Windows.displayName = 'Windows';

import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const MailAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21.91 9.325c-0.062-0.114-0.148-0.207-0.253-0.276l-0.003-0.002-9.231-6.154c-0.12-0.077-0.266-0.123-0.423-0.123s-0.303 0.046-0.426 0.125l0.003-0.002-9.231 6.154c-0.21 0.137-0.346 0.371-0.346 0.637 0 0.003 0 0.005 0 0.008v-0 10c0 0 0 0 0 0 0 0.85 0.689 1.538 1.538 1.538 0 0 0 0 0 0h16.923c0 0 0 0 0 0 0.85 0 1.538-0.689 1.538-1.538 0-0 0-0 0-0v0-10c0-0.002 0-0.005 0-0.008 0-0.131-0.033-0.255-0.092-0.363l0.002 0.004zM3.538 11.182l5.451 3.894-5.451 3.846zM5.125 19.692l5.442-3.846h2.865l5.442 3.846zM20.462 18.922l-5.451-3.846 5.452-3.894z"></path>
      </svg>
    );
  }
);

MailAlt.displayName = 'MailAlt';

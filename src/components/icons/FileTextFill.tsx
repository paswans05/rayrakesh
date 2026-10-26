import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const FileTextFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.717 7.703l-5.25-5.4c-0.182-0.187-0.436-0.303-0.717-0.303-0 0-0 0-0 0h-7c-1.522 0.016-2.75 1.254-2.75 2.778 0 0.008 0 0.015 0 0.023v-0.001 14.4c-0 0.007-0 0.014-0 0.022 0 1.524 1.228 2.762 2.749 2.778l0.002 0h10.5c1.522-0.016 2.75-1.254 2.75-2.778 0-0.008-0-0.015-0-0.023v0.001-10.8c-0-0.271-0.108-0.517-0.283-0.698l0 0zM8 11.25h3c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75v0h-3c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75v0zM16 18.75h-8c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75v0h8c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75v0zM16 15.75h-8c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75v0h8c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75v0zM13.121 8.808v-5l5 5z"></path>
      </svg>
    );
  }
);

FileTextFill.displayName = 'FileTextFill';

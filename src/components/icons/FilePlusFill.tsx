import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const FilePlusFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.717 7.703l-5.25-5.4c-0.182-0.187-0.436-0.303-0.717-0.303-0 0-0 0-0 0h-7c-1.522 0.016-2.75 1.254-2.75 2.778 0 0.008 0 0.015 0 0.023v-0.001 14.4c-0 0.007-0 0.014-0 0.022 0 1.524 1.228 2.762 2.749 2.778l0.002 0h10.5c1.522-0.016 2.75-1.254 2.75-2.778 0-0.008-0-0.015-0-0.023v0.001-10.8c-0-0.271-0.108-0.517-0.283-0.698l0 0zM13.121 8.808v-5l5 5zM15 16c-0 0.452-0.366 0.818-0.818 0.818h-1.364v1.364c0 0.452-0.366 0.818-0.818 0.818s-0.818-0.366-0.818-0.818v0-1.364h-1.364c-0.452 0-0.818-0.366-0.818-0.818s0.366-0.818 0.818-0.818v0h1.364v-1.364c0-0.452 0.366-0.818 0.818-0.818s0.818 0.366 0.818 0.818v0 1.364h1.364c0.452 0 0.818 0.366 0.818 0.818v0z"></path>
      </svg>
    );
  }
);

FilePlusFill.displayName = 'FilePlusFill';

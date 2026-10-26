import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const File = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.717 7.703l-5.25-5.4c-0.182-0.187-0.436-0.303-0.717-0.303-0 0-0 0-0 0h-7c-1.522 0.016-2.75 1.254-2.75 2.778 0 0.008 0 0.015 0 0.023v-0.001 14.4c-0 0.007-0 0.014-0 0.022 0 1.524 1.228 2.762 2.749 2.778l0.002 0h10.5c1.522-0.016 2.75-1.254 2.75-2.778 0-0.008-0-0.015-0-0.023v0.001-10.8c-0-0.271-0.108-0.517-0.283-0.698l0 0zM17.217 8h-3.217v-3.309zM17.25 20h-10.5c-0.418-0.015-0.75-0.357-0.75-0.777 0-0.008 0-0.016 0-0.025l-0 0.001v-14.4c-0-0.007-0-0.015-0-0.023 0-0.42 0.333-0.762 0.749-0.777l0.001-0h5.25v5c0 0.552 0.448 1 1 1v0h5v9.2c0 0.007 0 0.015 0 0.023 0 0.42-0.333 0.762-0.749 0.777l-0.001 0z"></path>
      </svg>
    );
  }
);

File.displayName = 'File';

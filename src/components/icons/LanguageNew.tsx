import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const LanguageNew = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M4.070 16.4l1.25 1.25 4.17-4.17 2.61 2.61 0.67-1.8-2.1-2.080 0.15-0.18c1.3-1.5 2.26-3.2 2.87-5.070l0.060-0.17h2.45v-1.77h-5.83v-1.67h-1.77v1.67h-5.83v1.76h9.3l-0.13 0.34c-0.53 1.38-1.29 2.65-2.26 3.78l-0.19 0.22-0.19-0.22c-0.66-0.77-1.23-1.62-1.69-2.52v-0.030h-1.79l0.030 0.070c0.58 1.29 1.35 2.5 2.31 3.6l0.15 0.18-4.24 4.18zM19.46 20.13h1.77l-3.79-10.1h-1.74l-3.79 10.1h1.77l0.93-2.5h3.89l0.94 2.5zM17.86 15.86h-2.56l1.28-3.42 1.28 3.42z"></path>
      </svg>
    );
  }
);

LanguageNew.displayName = 'LanguageNew';

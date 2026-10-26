import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ImgFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 9c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3v0c1.656 0.002 2.998 1.344 3 3v0zM22 5.5v13c-0.002 1.932-1.568 3.498-3.5 3.5h-13c-1.932-0.002-3.498-1.568-3.5-3.5v-13c0.002-1.932 1.568-3.498 3.5-3.5h13c1.932 0.002 3.498 1.568 3.5 3.5v0zM5.5 20h1.074l9.33-9.693c0.182-0.189 0.438-0.307 0.721-0.307s0.538 0.118 0.72 0.306l0 0 2.654 2.758v-7.565c-0.001-0.828-0.672-1.499-1.5-1.5h-13c-0.828 0.001-1.499 0.672-1.5 1.5v13c0.001 0.828 0.672 1.499 1.5 1.5h0z"></path>
      </svg>
    );
  }
);

ImgFill.displayName = 'ImgFill';

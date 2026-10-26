import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CloudFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.452 9.25h-0.418c-1.263-3.107-4.259-5.258-7.757-5.258-0.735 0-1.448 0.095-2.126 0.273l0.058-0.013c-2.195 0.54-4.001 1.909-5.105 3.749l-0.021 0.037c-0.683 1.13-1.088 2.495-1.088 3.954 0 0.717 0.098 1.412 0.28 2.071l-0.013-0.054c1.008 3.485 4.17 5.99 7.918 5.99 0.031 0 0.062-0 0.093-0.001l-0.005 0h8.184c0.023 0 0.050 0.001 0.078 0.001 2.987 0 5.414-2.395 5.466-5.37l0-0.005c-0.052-2.98-2.479-5.375-5.467-5.375-0.027 0-0.055 0-0.082 0.001l0.004-0z"></path>
      </svg>
    );
  }
);

CloudFill.displayName = 'CloudFill';

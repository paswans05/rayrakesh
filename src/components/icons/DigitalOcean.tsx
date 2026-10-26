import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const DigitalOcean = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12.001 21v-3.477h0.011v-0.011c3.047-0.014 5.511-2.487 5.511-5.535 0-0.724-0.139-1.416-0.392-2.050l0.013 0.037c-0.539-1.45-1.663-2.573-3.078-3.098l-0.036-0.012c-0.596-0.239-1.286-0.377-2.009-0.377-3.053 0-5.53 2.468-5.544 5.518v0.001h-3.477c0.014-4.978 4.052-9.008 9.032-9.008 1.014 0 1.989 0.167 2.899 0.475l-0.064-0.019c2.713 0.875 4.808 2.971 5.666 5.623l0.017 0.062c0.292 0.849 0.46 1.828 0.46 2.846 0 4.979-4.032 9.016-9.010 9.024h-0.001zM5.868 15.287v2.236h-2.235v-2.236zM5.868 17.523h2.675v2.671h-2.675zM12.001 17.513v0.011h-3.458v-3.47h3.469v3.459z"></path>
      </svg>
    );
  }
);

DigitalOcean.displayName = 'DigitalOcean';

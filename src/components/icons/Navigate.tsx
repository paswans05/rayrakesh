import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Navigate = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12.974 22.5c-0.033 0-0.066-0.002-0.099-0.005-0.424-0.043-0.768-0.346-0.87-0.746l-0.002-0.007-1.749-6.997-6.997-1.749c-0.438-0.113-0.756-0.504-0.756-0.97 0-0.396 0.231-0.739 0.565-0.901l0.006-0.003 18-8.526c0.125-0.061 0.272-0.096 0.428-0.096 0.552 0 1 0.448 1 1 0 0.155-0.035 0.302-0.098 0.433l0.003-0.006-8.526 18c-0.164 0.341-0.507 0.572-0.903 0.572h-0zM6.454 11.733l4.868 1.218c0.359 0.092 0.636 0.369 0.726 0.721l0.002 0.007 1.217 4.868 6.131-12.944z"></path>
      </svg>
    );
  }
);

Navigate.displayName = 'Navigate';

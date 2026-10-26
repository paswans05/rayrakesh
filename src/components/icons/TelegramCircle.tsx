import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const TelegramCircle = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21.936 12.299c0 5.523-4.477 10-10 10s-10-4.477-10-10c0-5.523 4.477-10 10-10v0c0.001 0 0.001 0 0.002 0 5.522 0 9.998 4.476 9.998 9.998 0 0.001 0 0.001 0 0.002v-0zM16.154 8.363l-9.642 3.718c-0.661 0.258-0.649 0.625-0.112 0.795l2.468 0.77 5.726-3.605c0.266-0.178 0.512-0.077 0.31 0.101l-4.633 4.186-0.178 2.544c0.002 0 0.003 0 0.005 0 0.202 0 0.382-0.096 0.497-0.244l0.001-0.001 1.206-1.161 2.5 1.842c0.456 0.258 0.782 0.125 0.904-0.424l1.641-7.733c0.145-0.678-0.246-0.948-0.693-0.787z"></path>
      </svg>
    );
  }
);

TelegramCircle.displayName = 'TelegramCircle';

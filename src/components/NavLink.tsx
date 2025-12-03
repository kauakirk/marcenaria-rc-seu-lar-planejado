import Link from 'next/link';
import { useRouter } from 'next/router';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface NavLinkCompatProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, to, children, ...props }, ref) => {
    const { asPath } = useRouter();
    const isActive = asPath === to;

    return (
      <Link href={to} legacyBehavior>
        <a ref={ref} className={cn(className, isActive && activeClassName)} {...props}>
          {children}
        </a>
      </Link>
    );
  },
);

NavLink.displayName = 'NavLink';

export { NavLink };

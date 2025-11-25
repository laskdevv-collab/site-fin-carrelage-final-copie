import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'rounded-lg border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm transition-all hover:bg-white/10',
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = 'Card';

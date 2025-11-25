import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-stone disabled:pointer-events-none disabled:opacity-50',
                    {
                        'bg-accent-stone text-bg-dark hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98]': variant === 'primary',
                        'bg-bg-light text-bg-dark hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98]': variant === 'secondary',
                        'border border-white/20 bg-transparent text-white hover:bg-white/10': variant === 'outline',
                        'text-white hover:bg-white/10': variant === 'ghost',
                        'h-9 px-4 text-sm': size === 'sm',
                        'h-12 px-6 text-base': size === 'md',
                        'h-14 px-8 text-lg': size === 'lg',
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

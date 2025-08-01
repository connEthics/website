import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'header' | 'footer' | 'large';
  className?: string;
}

export default function Logo({ variant = 'header', className = '' }: LogoProps) {
  const getSizeClasses = () => {
    switch (variant) {
      case 'large':
        return 'h-16 w-auto'; // For hero sections
      case 'footer':
        return 'h-8 w-auto'; // For footer
      case 'header':
      default:
        return 'h-10 w-auto'; // For navigation
    }
  };

  const getTextSize = () => {
    switch (variant) {
      case 'large':
        return 'text-3xl';
      case 'footer':
        return 'text-xl';
      case 'header':
      default:
        return 'text-2xl';
    }
  };

  return (
    <Link href="/" className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Image avec fond blanc en mode sombre pour le contraste */}
      <div className="bg-white dark:bg-white p-1 rounded-lg">
        <Image
          src="/images/logo-connethics.webp"
          alt="ConnEthics Logo"
          width={variant === 'large' ? 64 : variant === 'footer' ? 32 : 40}
          height={variant === 'large' ? 64 : variant === 'footer' ? 32 : 40}
          className={getSizeClasses()}
          priority={variant === 'header'}
        />
      </div>
      
      {/* Company Name Text avec contraste amélioré */}
      <div className={`font-bold ${getTextSize()} ${
        variant === 'footer' 
          ? 'text-white' 
          : 'text-blue-900'
      } tracking-tight`}>
        ConnEthics
      </div>
    </Link>
  );
}

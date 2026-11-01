import React from 'react';

interface WaliaLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color'; 
  logoUrl?: string;
}

export const WaliaLogo: React.FC<WaliaLogoProps> = ({
  className = '',
  logoUrl = 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789850868/unm4auzwrcwdgkxvtmqt.png', // Replace with your actual image path
}) => {
  return (
    <div className={`flex items-center group cursor-pointer ${className}`}>
      {/* Custom Image Logo Only */}
      <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <img 
          src={logoUrl} 
          alt="Walia Travel Logo" 
          // Changed h-12 to h-20. Change this value to make it bigger or smaller.
          className="h-25 w-auto object-contain" 
        />
      </div>
    </div>
  );
};
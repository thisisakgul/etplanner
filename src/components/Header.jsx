import { useEffect, useState } from 'react';

const Header = () => {
  const text = "EVERYTHING PLANNER";
  
  const radius = 500;          // ← BURAYA DOKUN: Yayın “genişliği” (kavis yarıçapı)
  const fontSize = 24;         // ← BURAYA DOKUN: Harf boyutu

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    // ↑ BURAYA DOKUN: container yüksekliğini arttırıp aşağı indirebilirsin
    <div className="relative w-full h-40 mx-auto mt-12"> 
      
      {/* The curved text - positioned lower */}
      <div className="relative w-full">
        {text.split("").map((char, index) => {
          const totalChars = text.length;
          
          // ↓ BURAYA DOKUN: curve’un açıklığını ayarlar (Math.PI * 0.35 → daha büyük yay)
          const angleRange = Math.PI * 0.45; 
          const angle = -angleRange/2 + (angleRange * index / (totalChars - 1));
          
          // Calculate x and y positions
          const x = radius * Math.sin(angle);
          // ↓ BURAYA DOKUN: y çarpanı ve +20 offset ile aşağı taşınan miktar
          const y = radius * (1 - Math.cos(angle)) * 0.35 + 30; 
          
          // Color based on position
          const colors = [
            "text-red-600","text-orange-500","text-yellow-500",
            "text-green-600","text-blue-600","text-indigo-600","text-purple-500"
          ];
          const colorIndex = Math.floor((index / totalChars) * colors.length);
          
          return (
            <span
              key={index}
              className={`absolute font-bold ${colors[colorIndex]}`}
              style={{
                fontSize: `${fontSize}px`,
                left: `calc(50% + ${x}px)`,
                top: `${y}px`,
                transform: `translateX(-50%)`, // Center each character
                opacity: loaded ? 1 : 0,
                transition: `opacity 0.5s ease-in ${index * 0.05}s`
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Header;

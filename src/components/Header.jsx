import { useEffect, useState } from 'react';

const Header = () => {
  const text = "EVERYTHİNG PLANNER";
  const radius = 500; // Flat curve radius
  const fontSize = 24;
  
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <div className="relative w-full h-32 mx-auto mt-8"> {/* Increased top margin */}
      
      
      {/* The curved text - positioned lower */}
      <div className="relative w-full">
        {text.split("").map((char, index) => {
          // Calculate position along the curve
          const totalChars = text.length;
          const angleRange = Math.PI * 0.35; // Controls how much of the arc is used
          const angle = -angleRange/2 + (angleRange * index / (totalChars - 1));
          
          // Calculate x and y positions
          const x = (radius * Math.sin(angle));
          const y = radius * (1 - Math.cos(angle)) * 0.25 + 20; // Added offset to move text down
          
          // Color based on position
          const colors = [
            "text-red-600", "text-orange-500", "text-yellow-500", 
            "text-green-600", "text-blue-600", "text-indigo-600", "text-purple-500"
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
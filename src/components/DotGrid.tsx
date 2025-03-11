import React from "react";

interface MainProps {
  colorScheme?: 'primary' | 'light' | 'dark' | 'secondary';
}

const DotGrid: React.FC<MainProps> = ({
  colorScheme
}) => {
  return (
    <ul className="grid grid-cols-9 grid-rows-9 gap-1 md:gap-4 aspect-square min-w-[120px] min-h-[120px] md:min-w-[230px] md:min-h-[230px]">
      {Array.from({ length: 81 }).map((_, index) => (
        <li
          key={index}
          className={`
            h-1 w-1 md:w-3 md:h-3 rounded-full
            ${colorScheme === 'primary' || colorScheme === 'light'
            ? 'bg-primary'
            : 'bg-dark'
            }
          `}
          />
      ))}
    </ul>
  )
}

export default DotGrid;
import { ReactNode } from 'react';

type TypeColorVariations = {
  [key: string]: string;
};

const typeColorVariations: TypeColorVariations = {
  normal: 'bg-gray-400',
  fighting: 'bg-red-600',
  flying: 'bg-blue-300',
  poison: 'bg-purple-600',
  ground: 'bg-yellow-600',
  rock: 'bg-yellow-700',
  bug: 'bg-green-500',
  ghost: 'bg-purple-800',
  steel: 'bg-gray-500',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  grass: 'bg-green-600',
  electric: 'bg-yellow-400',
  psychic: 'bg-pink-500',
  ice: 'bg-blue-200',
  dragon: 'bg-indigo-700',
  dark: 'bg-gray-800',
  fairy: 'bg-pink-300',
  unknown: 'bg-gray-300',
  shadow: 'bg-black',
};

type PillProps = {
  type: string;
  children: ReactNode;
};

const Pill = ({ type, children }: PillProps) => {
  const colorClass = typeColorVariations[type] || 'bg-gray-200';
  return (
    <span
      className={`${colorClass} mr-1 rounded-full px-3 py-1 text-sm text-white`}
    >
      {children}
    </span>
  );
};

export default Pill;

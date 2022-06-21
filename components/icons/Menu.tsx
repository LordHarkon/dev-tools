interface MenuIconProps {
  className?: string;
  isOpen: boolean;
}

export default function MenuIcon({ className, isOpen }: MenuIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className ? className : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {isOpen && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />}
      {!isOpen && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
    </svg>
  );
}

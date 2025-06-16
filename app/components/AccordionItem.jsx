'use client';

export default function AccordionItem({ title, children, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 pb-6">
      <div 
        className="flex justify-between items-center cursor-pointer py-4 hover:text-apple-blue transition-colors" 
        onClick={onClick}
      >
        <h3 className="text-xl md:text-2xl font-medium">{title}</h3>
        <span 
          className="text-2xl text-apple-gray transition-transform duration-300" 
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </div>
      <div 
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '1000px' : '0' }}
      >
        <div className="pt-4 text-apple-gray leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
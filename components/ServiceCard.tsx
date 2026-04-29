interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded shadow-md border-l-4 border-forest p-6 hover:scale-105 transition-transform">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-bold text-lg text-darkforest mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}

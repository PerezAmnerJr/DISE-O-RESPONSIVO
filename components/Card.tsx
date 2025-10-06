type CardProps = {
  title: string
  description: string
  icon?: React.ReactNode
}

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow hover:shadow-lg transition">
      <div className="flex items-center gap-3 mb-4">
        {icon ? (
          <div className="p-3 bg-indigo-100 text-indigo-600 rounded-full">
            {icon}
          </div>
        ) : null}
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

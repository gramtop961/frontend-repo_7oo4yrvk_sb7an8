export default function PageHeader({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">{title}</h1>
      {subtitle && (
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}

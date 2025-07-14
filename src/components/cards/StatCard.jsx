export default function StatCard({ title, value, icon }) {
  const Icon = icon;
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <div>
        <h3 className="text-sm text-gray-500 dark:text-gray-400">{title}</h3>
        <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
          {value}
        </p>
      </div>
      {Icon && <Icon className="text-3xl text-indigo-600" />}
    </div>
  );
}

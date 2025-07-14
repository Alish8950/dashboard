export default function ChartPlaceholder({ title }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col">
      <h3 className="mb-2 text-gray-700 dark:text-gray-300">{title}</h3>
      <div className="flex-1 flex items-center justify-center text-gray-400">
        {/* Replace this with an actual chart component */}
        Chart goes here
      </div>
    </div>
  );
}

export default function Dropdown(props) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {props.text}
      </label>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      >
        <option key="" value="" />

        {props.options.map((res) => (
          <option key={res.value} value={res.label}>
            {res.label}
          </option>
        ))}
      </select>
    </div>
  );
}

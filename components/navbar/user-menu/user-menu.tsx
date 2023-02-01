export const UserMenu = () => {
	return (
		<button
			type="button"
			className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
			id="user-menu-button"
			aria-expanded="false"
			data-dropdown-toggle="user-dropdown"
			data-dropdown-placement="bottom"
		>
			<span className="sr-only">Open user menu</span>
			<img className="w-8 h-8 rounded-full" alt="user photo" />
		</button>
	);
};
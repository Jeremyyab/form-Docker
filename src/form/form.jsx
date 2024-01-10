const Form = () => {
	return (
		<form className="m-4 p-4 border border-gray-200 rounded">
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
					Nombre
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="nombre"
					type="text"
					placeholder="Tu nombre"
				/>
			</div>
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
					Email
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="email"
					type="email"
					placeholder="Tu email"
				/>
			</div>
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mensaje">
					Mensaje
				</label>
				<textarea
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="mensaje"
					placeholder="Tu mensaje"
				/>
			</div>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="submit">
				Enviar
			</button>
		</form>
	);
};
export default Form;

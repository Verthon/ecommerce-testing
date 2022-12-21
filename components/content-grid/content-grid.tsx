export const ContentGrid = () => {
	return (
		<section>
			<div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div className="bg-rose-400 p-8 md:p-12 lg:px-16 lg:py-24">
						<div className="mx-auto max-w-xl text-center">
							<h2 className="text-2xl font-bold text-white md:text-3xl">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit
							</h2>

							<p className="hidden text-white/90 sm:mt-4 sm:block">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
								egestas tempus tellus etiam sed. Quam a scelerisque amet
								ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
								quisque ut interdum tincidunt duis.
							</p>

							<div className="mt-4 md:mt-8">
								<a
									href="#"
									className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-rose-700 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
								>
									Get Started Today
								</a>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
						<img
							alt="Female"
							src="https://images.unsplash.com/photo-1557002666-513ca8eaa3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fGV5ZXdlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
							className="h-40 w-full object-contain sm:h-56 md:h-full"
						/>

						<img
							alt="Male"
							src="https://images.unsplash.com/photo-1496088941920-f7d451d95bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMwfHxleWV3ZWFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
							className="h-40 w-full object-cover sm:h-56 md:h-full"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

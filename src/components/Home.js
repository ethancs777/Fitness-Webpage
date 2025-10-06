function Home() {
    return (
        <div>
            <div className="flex justify-start font-bold text-4xl mb-4 lg:ml-32 lg:mr-32 pl-4
            ">
                <h1 className="text-white border-b-2 border-gray-600">Home</h1>
            </div>
            <div className="flex justify-start mb-4 lg:ml-32 lg:mr-32 pb-4">
                <h2 className="text-white text-start font-semibold sm:text-2xl text-md pl-4">Welcome to the Fitness App</h2>
            </div>
            <div className="flex justify-start h-96 mb-4 lg:ml-32 lg:mr-32 pl-4">
                <div className = "w-6/12 mr-[2%] border-white border-2 rounded-3xl">
                    <h3 className="text-white pl-4 pt-4 sm:text-xl text-xs font-semibold w-full">Get Started</h3>
                    <p className="text-white pl-4 pr-8 sm:text-lg text-xs">To get started consider looking at the available workouts and nutrition plans to see what you would like to focus on.</p>
                </div>
                <div className = "w-6/12 ml-[2%] border-white border-2 rounded-3xl">
                    <p className="text-white pl-4 pt-4 sm:text-xl text-xs font-semibold">Explore</p>
                </div>
            </div>
        </div>
    );
}
export default Home;

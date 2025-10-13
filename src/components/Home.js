import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className="flex justify-start font-bold text-4xl mb-4 lg:ml-32 lg:mr-32 px-4">
                <h1 className="text-white border-b-2 border-gray-600">Home</h1>
            </div>
            <div className="flex justify-start mb-4 lg:ml-32 lg:mr-32 px-4">
                <h2 className="text-white text-start font-semibold sm:text-2xl text-md">Welcome to the Fitness App</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-4 lg:ml-32 lg:mr-32 px-4">
                <div className="flex-1 border-white border-2 rounded-3xl p-6 bg-gray-900/30 transition-all duration-300">
                    <h3 className="text-white text-xl font-bold mb-4 ">Get Started</h3>
                    <p className="text-gray-300 font-semibold mb-6 leading-relaxed">
                        Ready to transform your fitness journey? Start with our comprehensive workout plans and nutrition guides designed for all fitness levels.
                    </p>
                    <div className="flex flex-col space-y-3">
                        <Link to="/Workouts">
                            <button className="min-w-[200px] bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 text-sm">
                                Browse Workouts
                            </button>
                        </Link>
                        <Link to="/Nutrition">
                            <button className="min-w-[200px] bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 text-sm">
                                Nutrition Plans
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            
            {/* Coming Soon Section */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 lg:ml-32 lg:mr-32 px-4">
                <div className="flex-1 border-2 border-gray-600 border-dashed rounded-3xl p-6 bg-gray-800/20 hover:bg-gray-800/40 transition-all duration-300">
                    <div className="">
                        <div className="mb-4">
                            <span className="inline-block bg-yellow-500/20 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full border border-yellow-500/30">
                                Work In Progress
                            </span>
                        </div>
                        <h3 className="text-white text-xl font-bold mb-3">Progress Tracking</h3>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                            Track your fitness journey with detailed progress analytics, workout history, and achievement milestones. 
                            Monitor your improvements and celebrate your success!
                        </p>
                        <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                            <span className="flex items-center">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                                Workout History
                            </span>
                            <span className="flex items-center">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Progress Charts
                            </span>
                            <span className="flex items-center">
                                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                                Goal Setting
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;

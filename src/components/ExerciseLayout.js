import { Link } from 'react-router-dom';

function ExerciseLayout({ name, image, description, actionButton, actionLink }) {

  return (
    <div className="exercise-layout bg-black rounded-lg p-6 border-4 border-blue-00 mb-8">
      <div className="exercise-header mb-4">
        <h2 className="text-white text-2xl font-bold mb-4">{name}</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <img src={image} alt={name} className="w-full md:w-64 h-48 md:h-auto md:max-h-64 object-contain rounded-lg flex-shrink-0"/>
            <div className="exercise-description flex-1 md:pl-4 md:border-l-2 md:border-white flex flex-col"> 
                <div className="text-gray-300 font-semibold mb-4 flex-grow">
                  {description.split('\n').map((line, index) => (
                    <p key={index} className={index > 0 ? 'mt-2' : ''}>
                      {line}
                    </p>
                  ))}
                </div>
                {actionButton && actionLink && (
                  <Link to={actionLink} className="mt-auto">
                    <button className="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                      {actionButton}
                    </button>
                  </Link>
                )}
            </div>
          </div>  
      </div>
    </div>
  );
}
export default ExerciseLayout;
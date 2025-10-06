function ExerciseLayout({ name, image, description }) {

  return (
    <div className="exercise-layout bg-black rounded-lg p-6 border border-gray-600 mb-8">
      <div className="exercise-header mb-4">
        <h2 className="text-white text-2xl font-bold mb-4">{name}</h2>
          <div className="flex flex-wrap">
            <img src={image} alt={name} className="justify-start text-left object-cover h-48 rounded-lg"/>
            <div className="exercise-description md:ml-16 md:pl-16 xsm:ml-8 xsm:pl-8 xsm:border-white xsm:border-l-2"> 
                <p className="text-gray-300 font-semibold">{description}</p>
            </div>
          </div>  
      </div>
    </div>
  );
}
export default ExerciseLayout;
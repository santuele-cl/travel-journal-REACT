const Card = (props) => {
    const {title, location, googleMapsUrl,startDate,endDate,description,imageUrl} = props
    return (
        <div className="flex flex-wrap items-center gap-6 pb-10">
            <div className="card-img-box overflow-hidden rounded-lg">
                <img className="object-cover h-full w-full" src={imageUrl} alt={title}/>
            </div>
            <div className="card-text">
                <div className="flex items-center gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F55A5A" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>
                        <a href={googleMapsUrl} target="_blank" className="text-gray-600 underline">{location}</a>
                    </span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">{title}</h2>
                <p className="my-3 font-semibold">{startDate} - {endDate}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card;
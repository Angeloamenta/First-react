function Card({title, imgUrl, isVisited, description}) {



    return (
        <div className="bg-gray-800 rounded">
            <div className="h-40 w-full">
            <img src={imgUrl} alt="" className="w-full h-full object-cover" />
            </div>
            <h2 className="mt-3 max-h-3 font-bold text-neutral-50">{title}</h2>
            <p className="p-3 min-h-5">{description}</p>
            {isVisited && <span>si</span>}
            {!isVisited && <span>no</span>}

        </div>
    )
}

export default Card
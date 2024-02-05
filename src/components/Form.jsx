import { useState, useEffect } from 'react'



function Form({ addCity, cities }) {

    const [formData, setFormData] = useState({
        title: "",
        imgUrl: "",
        description: "",
        isVisited: false
    })


    const inputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
                // name è un nome dinamico che in questo caso si trasformerà in title
            [name]: value
        });
    };

    const checkChange = (e) => {
        const { name, checked } = e.target
            setFormData({
                ...formData,
                // name è un nome dinamico che in questo caso si trasformerà in isvisited
            [name]: checked
            });
        
    }

    const setImage = (e) => {
            const { name, value } = e.target
            
            setFormData({
                ...formData,
                [name]: value
            })
    }

    const setDescription = (e) => {
            const { name, value } = e.target
            
            setFormData({
                ...formData,
                [name]: value
            })
    }

    const addCitta = (e) => {
        e.preventDefault()
        const city = {
            id: 5,
            title: formData.title,
            imgUrl: formData.imgUrl,
            description:formData.description,
            isVisited:formData.isVisited
    };
        
        addCity(city)
    }

    return (
        <form onSubmit={addCitta} className="flex flex-col gap-3 w-80 mb-5">
            <div className='p-2'>
                <label htmlFor="title">Title</label>
                <input className='p-2' value={formData.title} type="text" name="title" onChange={inputChange}/>
            </div>
             <div>
                <label htmlFor="img">Img</label>
                <input className='p-2' type="text" name="imgUrl" onChange={setImage} value={formData.imgUrl} />
            </div>
                <div>
                <label htmlFor="description">Description</label>
                <input className='p-2' type="text" name="description" onChange={setDescription} value={formData.description} />
            </div>
            <div>
                <label htmlFor="title">Title</label>
                <input name="isVisited" type="checkbox"  checked={formData.isVisited} onChange={checkChange} />
            </div>
            <button type="submit">Add</button>
        </form>
    )
}

export default Form
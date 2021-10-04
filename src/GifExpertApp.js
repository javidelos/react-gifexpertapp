import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories= ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    //const handleApp = () => {
        //const newElement = 'Naruto';
            //categories.push(newElement); 
            //No deberíamos utilizar este método. La app no funciona porque cambiamos la constante. Con los ...categories mantenemos la constante y añadimos nuevo elemento.
        //setCategories([...categories, newElement]);
            //También callback. Es muy útil para otras ocasiones
            // setCategories(cats => [...cats, newElement]);
    //}

    return (
        <>
            <h2>GifExpertApp - Javier</h2>
            <AddCategory setCategories={setCategories} categories={categories}/>
            <hr/>


            <ol>
                {
                    categories.map(category => 
                        <GifGrid 
                            key = {category}
                            category = {category}
                        />
                    )
                }
            </ol>
        </>
    )
}



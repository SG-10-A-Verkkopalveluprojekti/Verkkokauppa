import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CategoryList from '../Components/CategoryList';

export default function ManageCategories({url}) {
    const [newCategory, setNewCategory] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [addingCategory, setAddingCategory] = useState(false);

    function saveCategory(e) {
        e.preventDefault();
        const json = JSON.stringify({name: newCategory});
        axios.post(url + 'products/addcategory.php',json,{
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((response) => {
            setNewCategory('');
            setAddingCategory(false);
            setSelectedCategory(response.data);
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        });
    }

    if (!addingCategory) {
        return (
            <div className='admin-contents'>
                <h3>Manage categories</h3>
                <div>
                    <label>Category:</label>
                    <CategoryList
                        url={url}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                    <button className="btn btn-dark" type="button" onClick={() => setAddingCategory(true)}>Add</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='admin-contents'>
                <h3>Add new category</h3>
                <form onSubmit={saveCategory}>
                    <div>
                        <label>Category name</label>
                        <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}/>
                    </div>
                    <button type="button" onClick={() => setAddingCategory(false)}>Cancel</button>
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

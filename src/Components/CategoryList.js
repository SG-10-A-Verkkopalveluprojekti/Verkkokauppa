import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function CategoryList({url,selectedCategory,setSelectedCategory}) {
    const [categories,setCategories] = useState([]);

    useEffect(() => {
        axios.get(url + 'products/getcategories.php')
        .then((response) => {
            const json = response.data;
            if (json) {
                if (selectedCategory === null) { //Set first cateogry selected if there is no default
                    setSelectedCategory(json[0]);
                }
                setCategories(json);
            }
        }).catch (error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }, [selectedCategory])

    function onCategoryChange(value) {

        setSelectedCategory(categories.find(item => item.category_num === value));
        
    }

    return (
        <select value={selectedCategory?.category_num} onChange={(e) => onCategoryChange(e.target.value)}>
            {categories.map((category) => (
                <option key={category.category_num} value={category.category_num}>{category.name}</option>
            ))}
        </select>
    )

    
}
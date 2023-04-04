import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import SpecificItemBuy from '../Components/SpecificItemBuy';
import SpecificItemInfo from '../Components/SpecificItemInfo';

const ShowItem = ({url}) => {
    const [product, setProduct] = useState(null);
    
    let params = useParams();

    useEffect(() => {
        axios.get(url + 'products/getproduct.php/' + params.product_id)
            .then((response) => {
                const json = response.data;
                setProduct(response.data);
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    }, [params])

    return (
        <div>
            <SpecificItemBuy/>
            <SpecificItemInfo/>
        </div>
    );
}

export default ShowItem;
import { selectShopItems } from "Redux/selectors"
import { StoreItemCard } from "components/StoreItemCard/StoreItemCard"
import { useSelector } from "react-redux"

export const StoreItems = ()=>{
const items = useSelector(selectShopItems)

    return(
        <div>
            
<ul>
{items.map(item=>
    <li key ={item.id}>
<StoreItemCard pharmacy = {item.pharmacy}/>

    </li>
    
    )}


</ul>


        </div>
    )
}
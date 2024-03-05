import { selectShops } from 'Redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const Stores = () => {
  const shops = useSelector(selectShops);
  const dispatch = useDispatch()

const handleClick = (name) =>{
const clickedshop =  shops.filter(shop=> shop.name === name )
dispatch(setShopItems(clickedshop))

}


  return (
    <div>
      <ul>
        {shops.map(shop => {
          <li key={shop.id}>
            <div onClick={handleClick}>
              <h3>{shop.name}</h3>
            </div>
          </li>;
        })}
      </ul>
    </div>
  );
};

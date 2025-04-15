import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './sliceCart';
function DeleteCart({ children, pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      {children}
    </Button>
  );
}

export default DeleteCart;

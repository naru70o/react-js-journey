import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="h-screen px-6 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;

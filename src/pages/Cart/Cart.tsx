import CartBody from "component/cart/CartBody";
import ContainerCustom from "component/common/ContainerCustom";
import ScrollProducts from "component/common/ScrollProducts";
import Title from "component/common/Title";

interface Props {}

const Cart = (props: Props) => {
  return (
    <>
      <CartBody />
      <ContainerCustom mgt={true} mgb={true}>
        <Title title="You Might Also Like" />
        <ScrollProducts />
      </ContainerCustom>
    </>
  );
};

export default Cart;

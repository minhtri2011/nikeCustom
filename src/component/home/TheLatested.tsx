import img from "assest/thelasted.jpg";
import imgMini from "assest/thelastedMini.jpg";
import Caption from "component/common/Caption";
import ContainerCustom from "component/common/ContainerCustom";
import Title from "component/common/Title";
import useCheckBreakpoints from "hooks/useCheckBreakpoints";

interface Props {}

const TheLatested = (props: Props) => {
  const breakpoint = useCheckBreakpoints();
  return (
    <ContainerCustom mgt={true}>
      <Title title="The Latest" />
      <img
        src={breakpoint === "sm" ? imgMini : img}
        alt="nike"
        style={{ width: "100%" }}
      />
      <Caption
        miniTitle="Stay Grounded"
        content="Trusted by trail runners to take you from road to trail and back."
        title="Nike React Pegasus Trail 4"
        button="Shop"
        link="/products"
      />
    </ContainerCustom>
  );
};

export default TheLatested;

import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";


interface Style
    {
        layout?: "vertical"  | undefined;
        color?: "gold" | "blue" | "silver" | "white" | "black" | undefined;
        shape?: "rect" | "pill" | undefined;
        height?: number | undefined;
        // label?: "paypal" | "checkout" | "buynow" | "pay" | "installment" | "subscribe" | "donate" | undefined;
        // tagline?: boolean | undefined;
    }
    
    // This values are the props in the UI
    // const amount = "2";
    const currency = "USD";
    const style:Style = { layout: "vertical",color:'gold',shape:'pill', height:55 };

    interface Props {
        onsuccess: () => Promise<void>;
        amount: any;
        disable:boolean
    }

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({
  currency,
  showSpinner,
  amount,
  onsuccess,
  disable
}: {
  currency: any;
  showSpinner: any;
  amount: any;
  onsuccess: () => Promise<void>;
  disable:boolean
}) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        disabled={disable}
        className='customPaypalButton'
        style={style}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data: any, actions: any) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order
            onsuccess()
          });
        }}
      />
    </>
  );
};

export default function Paypal({ amount, onsuccess,disable }: Props) {
  return (
    <div style={{ maxWidth: "750px", minHeight: "200px" }}>
      <PayPalScriptProvider
        options={{
          "client-id": "test",
          components: "buttons",
          currency: "USD",
        }}
      >
        <ButtonWrapper
          amount={amount}
          currency={currency}
          showSpinner={false}
          onsuccess={onsuccess}
          disable={disable}
        />
      </PayPalScriptProvider>
    </div>
  );
}

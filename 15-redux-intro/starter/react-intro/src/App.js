import CreateCustomer from "./featurs/customers/CreateCustomer";
import Customer from "./featurs/customers/Customer";
import BalanceDisplay from "./featurs/accounts/BalanceDisplay";
import AccountOperations from "./featurs/accounts/accountOperations";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((store) => store.customer.fullName);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;

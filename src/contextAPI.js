import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  walletAddress: null,
  setAddress: () => {},
});
function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [walletAddress, setWalletAddress] = useState(null);

  const setAddress = (address) => {
    setWalletAddress(address);
  };

  const value = {
    walletAddress,
    setAddress,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}

export { useAuth, AuthProvider };

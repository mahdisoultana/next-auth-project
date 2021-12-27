import { SessionProvider } from "next-auth/react";
import { QueryClientProvider, QueryClient } from "react-query";
// import { ReactQueryDevtools } from "react-query-devtools";
import UserPorvider from "../hooks/userProvider";
import { StyledGlobale } from "../styles/StyledGlobale";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const client = new QueryClient();
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={client}>
        <UserPorvider>
          <StyledGlobale />
          <Component {...pageProps} />
        </UserPorvider>
        {/* <ReactQueryDevtools initialIsOpen /> */}
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
// toast.success("Well Done !", {
//   icon: "👌",
// });

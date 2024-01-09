//protects route access, redirects to login page

import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

export const config = {
  matcher: ["/conversations/:path*", "/users/:path*"],
};

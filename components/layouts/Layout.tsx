import MainNavigation from "./MainNavigation";
import {PropsWithChildren} from "react";

function Layout(props: PropsWithChildren) {
  return (
    <div>
      <MainNavigation />
      <div className="flex flex-row">
        <div>
          <main>{props.children}</main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
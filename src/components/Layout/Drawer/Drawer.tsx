import Navbar from "../Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

type DrawerProps = {
  children: React.ReactNode;
};

export default function Drawer({ children }: DrawerProps) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center min-h-screen">
        <Navbar />
        <div className="grow flex flex-col items-center justify-center p-4">
          <div className="max-h-[calc(100vh-96px)] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
}

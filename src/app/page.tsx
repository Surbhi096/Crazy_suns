import TopHeader from "./components/TopHeader";
import SideMenu from "./components/SideMenu";
//import { Layout } from "antd";
//const { Content } = Layout;
export default function Home() {
  return (
    <main className="">
      <TopHeader />
      <div className="h-screen w-full flex pt-16">
        <SideMenu />
        <div>Hello</div>
      </div>
    </main>
  );
}

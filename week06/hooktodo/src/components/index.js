import { Outlet } from "react-router-dom";
import Footer from "./Layout/Footer/footer";
import Header from "./Layout/Header/";
// 주소를 치면 브라우저 라우터가 주소를 감지하고 관련된 컴포넌트를 띄어줌(즉, 라우트를 보여줌)
// 레이아웃은 HTML 덩어리인데, <Outlet/>을 작성해주면서 Layout에 맞는 경로를 보여줌
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;

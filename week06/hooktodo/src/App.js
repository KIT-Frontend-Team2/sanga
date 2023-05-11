import { ThemeProvider } from "styled-components";
import "./App.css";
import Layout from "./components";
import MainPage from "./pages/main";
import TodoPage from "./pages/todo";
import { BrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import theme from "./styles/theme";
import router from "./routes/routing";
import GlobalStyles from "./styles/global";

function App() {
  return (
    // 내가 만든 객체를 모든 컴포넌트에서 사용할 수 있게해줌
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
    //     <BrowserRouter>
    //     {/* HTML5를 지원하느 브라우저의  URL의 변화를 감지*/}
    //     <Routes>
    //     {/** 하위에 있는 Route 컴포넌트 중 url과 path가 일치하는 컴포넌트만 보여주는 역할*/}
    //       <Route element={<Layout/>}>
    //         <Route path='/' element={<MainPage/>} />
    //         <Route path='/todo/:todoId' element={<TodoPage/>} />
    //       </Route>
    //     </Routes>
    //     </BrowserRouter>
    // /*
    // BrowserRouter (URL 감지) -> Routes(하위에 route 중에 경로에 맞는 컴포넌트 보여주는 역할)
    // outlet --> routes에 의해 가지고와진 컴포넌트를 outlet으로 가지고올 수 있음
  );
}

export default App;

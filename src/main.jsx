//[필수] 1. 리액트 라이브러리 최초 렌더링(그리기)하는 함수
import { createRoot } from "react-dom/client";
//[필수] 2. index.html 에서 root 마크업 가져오기 , #ID , .Class
const root = document.querySelector( '#root' )
//[필수] 3. 가져온 root 마크업을 createRoot 함수에 전달한다.
const create = createRoot( root );

// [day05]
// import App from "./example/day05/App";
// import { BrowserRouter } from "react-router-dom";
// create.render( 
//     <BrowserRouter> { /* 최초 렌더링 컴포넌트 감싼다.*/ }
//         <App /> 
//     </BrowserRouter>
// )


// [day05]
// import Practice2 from "./example/day05/Practice2";
// import { BrowserRouter } from "react-router-dom";
// import Component from "./example/practice/Component";
// create.render( 
//   <BrowserRouter> { /* 최초 렌더링 컴포넌트 감싼다.*/ }
//        <Component /> 
//    </BrowserRouter>
// )

// import { BrowserRouter } from "react-router-dom";

// day13
// import { BrowserRouter } from "react-router-dom";
// import App from "./example/day13/App";
// create.render(<BrowserRouter><App/></BrowserRouter>)

// day14
import { BrowserRouter } from "react-router-dom";
import ChatRoom from "./example/day14/ChatRoom";
create.render(<ChatRoom/>)

// Component3.jsx
// 변수: 하나의 값 저장하는 수 , 매개변수: 함수 / 메소드에서 (인수) 받아서 사용하는 변수
// 인수/인자값: 함수가 실행될 떄 함수에게 전달하는 값
function plus( x , y ){} // 함수정의 , x/y 매개변수
plus( 3 , 4 ) // 함수호출 , 3/4 인수
// 즉] 3(인수)를 x(매개변수)에 대입

// 프롭스: 상위컴포넌트에서 하위컴포넌트에게 전달하는 객체 props , 읽기모드
function plus2( props ){}
    plus2( { v1:3 , v2:4 } ) // 3과 4 갖는 객체 1개
// ------------------------------------------------------------------
export default function Component3( props ){               // -- 상위요소
    let name = "유재석";
    // --- return 부터 jsx 문법 구역 , 주석: { /* */ }
    // jsx 에서는 HTML문법 { JS표현식 } HTML문법 { JS표현식 }
    return (<>
        {/* JSX주석 */}
        <div> {name} </div> <div> { 10 + 20 } </div>
        {/* 마크업명 속성명 ="속성값" 속성명 ="속성값"  속성명 ="속성값"  */}
        <input type="text" value="안녕" name="입력상자" />
        <SubComp1 name="유재석" age = "40" />
        <SubComp1 name="황소연" age = "24" />
        <SubComp1 name="권유린" age = "24" />
    </>)
}

function SubComp1( props ){                                 // -- 하위요소
    console.log( props );
    return (<>
        <h4>{props.name}님 {props.age}세</h4>
    </>)
}
function SubComp2( { name , age } ){
    return(<>
    <h4>{ name }님 {age}세 </h4>
    </>)
}
// props : 객체{}
//  { name , age } = props{} ,
// 구조분해 : proms 객체를 name 과 age 변수에 각각 저장 ( proms를 쪼개서 가져옴. )
// -> 객체를 각각의 변수로 가져옴


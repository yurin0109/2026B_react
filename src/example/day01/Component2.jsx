// Component2.jsx 만들고 78~79 코드 따라서 작성
// App.jsk -> Component2.jsx
// 1. 선언적함수 방법으로 컴포넌트 생성
function FrontComp() {
    return (<>
    <ul> 
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript</li>
        <li>jQuery</li>
    </ul>
</>)
}
const BackComp = () => {
    return (<>
        <li>백엔드</li>
        <ul>
            <li>Java</li>
            <li>Oracle</li>
            <li>JSP</li>
            <li>Spring Boot</li>
        </ul>
    </>)
}
const FormComp = function() { 
    return (<>

    <form>
        <select name="yurin">
            <option value="front">프론트엔드</option>
            <option value="back">백엔드</option>
        </select>
        <input type="text" name="title" />
        <input type="submit" value="추가" />        
    </form>
    </>)
}
export default function Component2(props) {
    return(<>
        <div>
            <h2>React - Component</h2>
            <ol> // 컴포넌트 삽입
                <FrontComp></FrontComp>
                <BackComp/>
            </ol>
            <FormComp/>
        </div>
    
    </>)
}
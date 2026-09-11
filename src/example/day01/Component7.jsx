function FrontComp(props){}
const BackComp = ({onMyEvent2}) => {
    return (<>
        <li><a href="/" onClick={(event)=>{
            event.preventDefault();
            onMyEvent2('백엔드 클릭됨(자식전달)');
        }}>백엔드</a></li>
        <ul>
            <li>Java</li>
            <li>Oracle</li>
            <li>JSP</li>
            <li>Spring Boot</li>
        </ul>
    </>)
}
function App() {
    return (<>
        <h2>React-Event</h2>
        <ol>
            </FrontComp>
            <BackComp onMyEvent2={(msg)=>{
                alert(msg);
            }}/>
        </ol>
    </>)
}
export default App;
function FrontComp(props) {
    // *추후에 연동할 백엔드 와 통신 AXIOS*
    const liRows = [];
    for(let i=0; i<props.propData1.length-1; i++){
        liRows.push(
            <li key={i}>{props.propData1[i]}</li>
        );
    }
    return (<>
    <li>{props.frTitle}</li>
    <ul>
        {liRows}
    </ul>
    </>)
}

const BackComp = ({propData2, baTitle}) => {
    const liRows = [];
    let keyCnt = 0;
    for(let row of propData2){
        liRows.push(
            <li key={keyCnt++}>{row}</li>
        );
    }
    return (<>
        <li>{baTitle}</li>
        <ul>
            {liRows}
        </ul>
    </>)
}
function Component4() {
    const frontData = ['HTML5' , 'CSS3' , 'Javascript' , 'jQuery'];
    const backData = ['Java' , 'Oracle' , 'JSP' , 'Spring Boot'];
    return (<>
    <div>
        <h2>React-Props</h2>
        <ol>
            <FrontComp propData1={frontData} frTitle="프론트엔드"></FrontComp>
            <BackComp propData2={backData} baTitle="백엔드" />
        </ol>
    </div>
    </>)
}
export default Component4
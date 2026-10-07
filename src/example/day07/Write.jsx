import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Write( props ){
    const navigate = useNavigate();
    const 등록함수 = async ( event )=>{
        event.preventDefault();
        console.log( event.target )
        const obj = {
            name : event.target.writer.vaule ,
            subject : event.target.title.vaule ,
            content : event.target.contents.vaule
        }
        // axios( url , body ); // 백엔드에게 HTTP POST 통신
        const response = await axios.post("http://localhost:8080/api" , obj);
        const data = response.data;
        if( data == true ){ navigate("/list")}
    }

    return (<>
        <div>
            <Link to="/list"> 목록 </Link>
            <form onSubmit={ (event) => {등록함수(event);}}>
                작성자 : <input name="writer"/> <br/>
                제목 : <input name="title"/> <br/>
                내용 : <textarea name="contents" row="3"></textarea> <br/>
                    <input type="submit" value="작성" />
            </form>
        </div>
    </>)
}

/*
    // html: <a href=""> , REACT: <Link to="">
    // js: location.href="" , REACT: navigate("")
    // * html/js 코드는 깜박거림. *
*/
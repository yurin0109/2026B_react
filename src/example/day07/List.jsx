import axios from "axios";
import { useEffect, useState } from "react";

export default function List( props ){
    const [boardData , setBoardData] = useState([]);
    let requestUrl = "http://localhost:8080/api";

    const 전체조회 = async()=>{
        const response = await axios.get( requestUrl );
        const data = response.data;
        console.log( response )
        setBoardData( data );
    }
    useEffect( function () {
        전체조회();
    },[]);

    let lists = boardData.map( (row) => {

        let date = row.regdate.substring(0,10);
        let subject = row.subject.substring(0,20);
    
        return (<>
            <tr key={row.idx}>
                <td className="cen">{row.idx}</td>
                <td><Link to={"/view/"+row.idx}>{subject}</Link></td>
                <td className="cen">{row.name}</td>
                <td className="cen">{date}</td>
            </tr>
        </>);    
    });

    return (<>
        <hearder> 
            <h2>게시판-목록</h2>
            </hearder>
            <nav>
                <Link to={"/write"}>글쓰기</Link>
                </nav>
                <article>
                    <table id="boardTable">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>날짜</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lists}
                        </tbody>
                    </table>
                </article>
            </>);
        }
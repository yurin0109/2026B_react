import axios from "axios";
import { useEffect, useState } from "react";

export default function Practice2(props) {
    const [myJSON , setMyJSON] = useState([]);
    useEffect( async function(){
        const response = await axios.get( "https://discussions-louis-bradley-blue.trycloudflare.com/api/categories" ); 
        const data = response.data;
        console.log(data);
        setMyJSON( data ); // 통신 응답결과 상태변수에 대입 --> 렌더링 
    } , []);

    let trTag = myJSON.map((data) => {
        return (
            <tr>
            <td>{data.cno}</td>
            <td>{data.name}</td>
            </tr>
        );
    });

    return (
    <>

    <div className="Box" style={{ backgroundColor: "lightgray", padding: "10px", marginBottom: "10px" }}>
        <h2>권유린 [카테고리 전체 조회] </h2>

     
            <div className="gray-bg">
            <span>학과:</span>

            <span>산업경영공학과</span>
            </div>

        <div className="gray-bg"></div>
            <span>자기소개:</span>

            <span>안녕하세용</span>
        </div>

            <div style={{ backgroundColor: "lightgray", padding: "10px" }}></div>
            <span>카테고리 목록:</span>
    <div>
                <table border="1" style={{ marginTop: "5px", backgroundColor: "white" }}>
                    <thead>
                        <tr>
                            <th>카테고리번호</th><th>카테고리명</th>
                        </tr>
                    </thead>
                    <tbody>{trTag}</tbody>
                </table>
            </div>
        </>
    );
}   
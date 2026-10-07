import axios from "axios";
import { useEffect, useState } from "react";

export default function Component(props) {
  const [myJSON, setMyJSON] = useState([]);
  useEffect(async function () {
    const response = await axios.get(
      "http://localhost:8080/test1",
    );
    const data = response.data;
    console.log(data);
    setMyJSON(data); // 통신 응답결과 상태변수에 대입 --> 렌더링
  }, []);

  let trTag = myJSON.body.items.item.map((data) => {
    return (
      <tr>
        <td>{data.aplyBgnDt}</td>
        <td>{data.cntySgn}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="Box">
        <h2>권유린 [카테고리 전체 조회] </h2>

        <div>
          <span>학과:</span>

          <span>산업경영공학과</span>
        </div>

        <span>자기소개:</span>

        <span>안녕하세용</span>
      </div>

      <span>카테고리 목록:</span>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>aplyBgnDt</th>
              <th>cntySgn</th>
            </tr>
          </thead>
          <tbody>{trTag}</tbody>
        </table>
      </div>
    </>
  );
}

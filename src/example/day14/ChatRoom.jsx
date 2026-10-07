
 	
import  { useState, useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs'; // npm @stomp/stompjs

export default function ChatRoom( props ) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const clientRef = useRef(null);

  useEffect(() => {
    // STOMP 클라이언트 인스턴스 생성 및 통신 옵션 설정
    const client = new Client({
      // 백엔드 웹소켓 연결용 엔드포인트 URL
      brokerURL: 'ws://localhost:8082/ws-chat',
      // 웹소켓 핸드셰이크 및 STOMP 브로커 연결 성공 시 실행되는 콜백
      onConnect: () => {
        // 'general' 방 토픽 경로(/sub/chat/room/general) 구독 등록
        client.subscribe('/sub/chat/room/general', (message) => {
          // 수신된 JSON 형식의 메시지 본문(body)을 JS 객체로 파싱하여 배열에 직접 push
          messages.push( JSON.parse(message.body ) );
          // 배열의 얕은 복사본(새로운 참조값)을 만들어 상태를 업데이트하고 리렌더링 유발
          setMessages( [...messages] )
        });
      },
    });

    // 클라이언트 활성화 (실제 웹소켓 연결 시작)
    client.activate();
    // 컴포넌트 전역에서 클라이언트를 재참조할 수 있도록 ref에 저장
    clientRef.current = client;

    // 컴포넌트 언마운트 시 실행되는 클린업 함수
    return () => {
      // 페이지 이탈 또는 컴포넌트 제거 시 소켓 연결을 안전하게 해제
      client.deactivate();
    };
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때 단 1회만 실행

  // 메시지 전송 처리 이벤트 핸들러
  const sendMessage = (e) => {
    // 클라이언트 인스턴스가 없거나 소켓이 연결되지 않은 상태라면 함수 종료
    if (clientRef.current == null ) return;

    // 브로커의 메시지 발행 경로(/pub/chat/message)로 데이터 전송
    clientRef.current.publish({
      destination: '/pub/chat/message',
      // 서버 규격(DTO)에 맞춰 대화 데이터를 JSON 문자열로 직렬화하여 본문에 설정
      body: JSON.stringify({
        type: 'TALK',          // 메시지 유형 (일반 대화)
        roomId: 'general',     // 대상 채팅방 식별자
        sender: 'user',        // 발신자 이름 또는 식별자
        content: message,       // 전송할 메시지 내용
      }),
    });

  };

  return (
    <div>
      <div>
        {messages.map((msg) => (
          <div>{msg.sender}: {msg.content} </div>
        ))}
      </div>
      <div >
        <input  value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="button" onClick={ sendMessage }>전송</button>
      </div>
    </div>
  );
};

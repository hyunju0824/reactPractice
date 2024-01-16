import React, {useEffect} from 'react';
import '../App.css';
import axios from 'axios';


function App() {
  //async / await 문법을 이용한 비동기 처리 방식입니다. async 키워드를 붙인 함수 내에서 await 키워드를 사용하면, Promise의 결과가 도착할 때까지 기다린 후에 그 값을 받아올 수 있습니다. *promise = 비동기 작업의 최종 결과값
  async function getUserList() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    // 가져온 data 담기
    const products = res.data;
    return products
  }

  useEffect(() => {
    getUserList().then(products => {
      // 응답이 도착했을 때 실행되는 코드
      console.log(products);
    })
    // 에러
    .catch(function (error) {
      console.log(error);
    })
  }
  )

  return (
    <div className="App">

    </div>
  );
}

export default App;

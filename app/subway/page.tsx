// this is subway page
// 출처 : https://www.arex.or.kr/station/trainTime.do?stnCd=075&menuNo=MN201503300000000018&langCd=ko_KR&device=Normal

export default function Page() {
    return (
      <section className="relative flex justify-center items-start w-full">
        {/* 왼쪽(오전) 영역 */}
        <div className="w-1/2 p-4 text-center text-2xl">
          <h2 className="font-semibold text-2xl mb-4">오전 (운서 ~ 청라, 12분)</h2>
          <br/>
          <div>6 : 24 AM</div>
          <div>6 : 31 AM</div>
          <div>6 : 38 AM</div>
          <div>6 : 48 AM</div>
          <div>6 : 54 AM</div>
          <br/>
          <div>7 : 02 AM</div>
          <div>7 : 12 AM</div>
          <div>7 : 24 AM</div>
          <div>7 : 28 AM</div>
          <div>7 : 42 AM</div>
          <div>7 : 53 AM</div>
          <br/>
          <div>8 : 06 AM</div>
          <div>8 : 18 AM</div>
          <div>8 : 34 AM</div>
          <div>8 : 48 AM</div>
        </div>
  
        {/* 오전과 오후 사이에 세로 선 */}
        <div className="absolute top-0 bottom-0 left-1/2 border-l border-gray-300"></div>
        {/* 망한코드 <div className="border-l border-gray-300 mx-4 min-h-[300px]"></div> */}

        {/* 오른쪽(오후) 영역 */}
        <div className="w-1/2 p-4 text-center text-2xl">
          <h2 className="font-semibold text-2xl mb-4">오후 (청라 ~ 운서, 12분)</h2>
          <br/>
          <div>3 : 00 PM</div>
          <div>3 : 08 PM</div>
          <div>3 : 16 PM</div>
          <div>3 : 27 PM</div>
          <div>3 : 39 PM</div>
          <div>3 : 47 PM</div>
          <br/>
          <div>4 : 01 PM</div>
          <div>4 : 13 PM</div>
          <div>4 : 21 PM</div>
          <div>4 : 36 PM</div>
          <div>4 : 47 PM</div>
          <br/>
          <div>5 : 01 PM</div>
          <div>5 : 08 PM</div>
          <div>5 : 21 PM</div>
          <div>5 : 34 PM</div>
          <div>5 : 50 PM</div>
          <div>6 : 01 PM</div>
        </div>
      </section>
    );
  }
  

  
  
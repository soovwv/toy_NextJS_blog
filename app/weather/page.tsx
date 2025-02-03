// app/weather/page.tsx
// https://home.openweathermap.org/api_keys bwkun@ / xp
export const dynamic = "force-dynamic"; // 최신 데이터 가져오기

// 백엔드 (서버에서 실행)
async function getWeatherData() {
  const apiKey = '';
  const lat = 37.4653; // 영종도 위도
  const lon = 126.4390; // 영종도 경도

  if (!apiKey) {
    console.error("❌ 환경 변수 OPENWEATHER_API_KEY가 설정되지 않았습니다.");
    return null;
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=56&appid=${apiKey}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`HTTP Error! 상태 코드: ${res.status}`);
    }

    const data = await res.json();

    // 하루에 8개의 데이터(3시간 간격)를 반환하므로, 하루씩 대표 데이터를 추출
    const dailyData = data.list.filter((_, index) => index % 8 === 0);

    return dailyData;
  } catch (error) {
    console.error("❌ 날씨 데이터를 가져오는 중 오류 발생:", error);
    return null;
  }
}

// 서버 컴포넌트 (백엔드에서 실행 후 HTML만 전달)
export default async function WeatherPage() {
  const weatherData = await getWeatherData();

  if (!weatherData) {
    return <div>❌ 날씨 정보를 불러오는 데 실패했습니다.</div>;
  }

  return (
    // 🌍 프론트엔드 (브라우저에서 실행)
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1> 이번 주 영종도 날씨</h1>
      <br/>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {weatherData.map((day: any, index: number) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "10px",
            }}
          >
            <p>
              <strong>📅 날짜:</strong>{" "}
              {new Date(day.dt * 1000).toLocaleDateString()}
            </p>
            <p>
              <strong>🌡️ 온도:</strong> {day.main.temp}°C
            </p>
            <p>
              <strong>⛅ 날씨:</strong> {day.weather[0].description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

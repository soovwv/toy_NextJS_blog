import './global.css' // 전역 스타일을 불러옵니다.
import type { Metadata } from 'next' // Next.js의 Metadata 타입을 가져옵니다.
import { GeistSans } from 'geist/font/sans' // Geist UI의 Sans 폰트를 불러옵니다.
import { GeistMono } from 'geist/font/mono' // Geist UI의 Mono 폰트를 불러옵니다.
import { Navbar } from './components/nav' // 네비게이션 바 컴포넌트를 불러옵니다.
import { Analytics } from '@vercel/analytics/react' // Vercel Analytics를 사용하여 방문 통계를 추적합니다.
import { SpeedInsights } from '@vercel/speed-insights/next' // Vercel Speed Insights를 사용하여 성능을 분석합니다.
import Footer from './components/footer' // 페이지 하단에 푸터 컴포넌트를 불러옵니다.
import { baseUrl } from './sitemap' // 사이트의 기본 URL을 sitemap에서 가져옵니다.

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl), // 기본 URL 설정
  title: {
    default: 'Next.js Portfolio Starter', // 기본 페이지 제목
    template: '%s | Next.js Portfolio Starter', // 페이지별 동적 제목 템플릿
  },
  description: 'This is my portfolio.', // 페이지 설명
  openGraph: {
    title: 'My Portfolio', // 오픈 그래프 제목
    description: 'This is my portfolio.', // 오픈 그래프 설명
    url: baseUrl, // 오픈 그래프 URL
    siteName: 'My Portfolio', // 오픈 그래프 사이트 이름
    locale: 'en_US', // 언어 설정
    type: 'website', // 콘텐츠 타입
  },
  robots: {
    index: true, // 검색엔진이 페이지를 색인하도록 설정
    follow: true, // 링크를 따라가도록 설정
    googleBot: {
      index: true, // 구글 봇이 페이지를 색인하도록 설정
      follow: true, // 구글 봇이 링크를 따라가도록 설정
      'max-video-preview': -1, // 비디오 미리보기 크기 제한 해제
      'max-image-preview': 'large', // 이미지 미리보기 크기 설정
      'max-snippet': -1, // 스니펫 크기 제한 해제
    },
  },
}

// 조건부 클래스명을 결합하는 함수
const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode // 자식 컴포넌트를 타입으로 받습니다.
}) {
  return (
    <html
      lang="en" // 페이지의 언어 설정
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black', // 기본 배경색과 텍스트 색 설정 (다크 모드 지원)
        GeistSans.variable, // GeistSans 폰트 적용
        GeistMono.variable // GeistMono 폰트 적용
      )}
    >
      <body className="antialiased max-w-5xl mx-4 mt-8 lg:mx-auto">
        {/* 페이지 본문 너비~~~~~~~~~~~~~
        max-w-xl
        이 클래스는 main 요소의 최대 너비를 xl로 제한합니다. 
        xl은 Tailwind CSS의 기본 설정에서 max-width: 36rem (576px)을 의미합니다.
        이 클래스는 화면 크기가 커지더라도 콘텐츠가 36rem(576px) 너비를 초과하지 않도록 설정합니다.

        (중요)**** 종류 : max-w-2xl ~ max-w-6xl 로 너비 조정 가능~

        lg:mx-auto
        이 클래스는 large 화면 크기(lg 이상)에서 mx-auto를 적용하여 좌우 여백을 자동으로 설정하고, 
        화면 너비가 커졌을 때 콘텐츠가 '중앙'에 위치하도록 만듭니다.
        (lg는 기본적으로 1024px 이상의 화면 크기에서 적용됩니다.)     
        */}
        
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {/* 네비게이션 바 */}
          <Navbar />
          
          {/* 자식 컴포넌트들 (페이지 콘텐츠) */}
          {children}

          {/* 푸터 컴포넌트 */}
          <Footer />

          {/* Vercel Analytics: 방문 통계 추적 */}
          <Analytics />
          
          {/* Vercel Speed Insights: 성능 분석 도구 */}
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}

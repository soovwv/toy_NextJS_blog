import Link from 'next/link'

const navItems = {
  '/': {
    name: '홈',
  },
  '/blog': {
    name: '세무사 소개',
  },
  'https://naver.com': {
    name: '주요업무',
  },  
  'https://naver.com/': {
    name: '가격안내',
  },
  'https://naver.com/1': {
    name: '오시는길',
  },
  'https://naver.com/2': {
    name: '블로그',
  },
  'https://naver.com/3': {
    name: '게시판',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10 overflow-x-hidden flex-wrap">
            {/*overflow-x-hidden(스크롤표시X) flex-wrap(글자 개행) 추가됨 */}

            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all
                   hover:text-neutral-800 
                   dark:hover:text-neutral-200 
                   flex align-middle relative py-1 px-2 
                   m-1 whitespace-nowrap"
                  style={{
                    fontSize: 'clamp(1.075rem, 2vw, 1.125rem)', // 텍스트 크기 조정
                  }}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}

import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/subway': {
    name: 'Subway',
  },  
  '/weather': {
    name: 'Weather',
  },
  '/foodmenu': {
    name: 'FoodMenu', //네이버말고 구글지도로 하자...
  },
  'https://naver.com': {
    name: 'Map', //네이버말고 구글지도로 하자...
  },
  '/blog': {
    name: '???',
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

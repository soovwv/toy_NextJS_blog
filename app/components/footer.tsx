import './footer.css'; // CSS 파일을 import

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/flus"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">FLUS</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/vercel/next.js"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">????</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        {/* © {new Date().getFullYear()} 윈도우 이모지 "윈키 + ." */}
        Today : {new Date().getFullYear()}년 {new Date().getMonth() + 1}월 {new Date().getDate()}일 🐈
        <br/>
        일정 : 2025년 2월 10일 ~ 3월 21일 (종료까지 {Math.ceil((new Date(2025, 2, 21).getTime() - Date.now()) / (1000 * 60 * 60 * 24))}일 남음)
        <span className="moving-dino">🦖</span>
      </p>
    </footer>
  )
}

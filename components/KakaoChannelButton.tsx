export default function KakaoChannelButton() {
  return (
    <a
      href="https://pf.kakao.com/_xaeWxkn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="잇다 카카오톡 채널 상담 열기"
      title="카카오톡 채널 상담"
      className="group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#FEE500] text-[#191919] shadow-[0_10px_30px_rgba(25,25,25,0.22)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(25,25,25,0.3)] focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="h-8 w-8 transition-transform duration-300 group-hover:scale-105 sm:h-9 sm:w-9"
      >
        <path
          fill="currentColor"
          d="M24 7C13.5 7 5 13.7 5 22c0 5.3 3.5 10 8.8 12.7l-2.2 7.1c-.2.7.6 1.2 1.2.8l8.4-5.6c.9.1 1.8.2 2.8.2 10.5 0 19-6.7 19-15.1S34.5 7 24 7Z"
        />
        <path
          fill="#FEE500"
          d="M14.1 19.2h3v9.2h-3v-9.2Zm-3.2 0h9.4v2.6h-9.4v-2.6Zm10.3 0h3v6.6h4.5v2.6h-7.5v-9.2Zm8.6 0h3v3.4l3-3.4h3.6l-3.6 4 3.9 5.2H36l-2.2-3-1 1.1v1.9h-3v-9.2Z"
        />
      </svg>
      <span className="sr-only">카카오톡 채널 상담</span>
    </a>
  );
}

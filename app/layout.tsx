import type { Metadata } from "next";
import KakaoChannelButton from "@/components/KakaoChannelButton";
import "./globals.css";

const siteUrl = "https://itda-edu.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "잇다과외 | 학교별 1:1 맞춤 과외",
    template: "%s | 잇다과외",
  },
  description: "잇다과외는 학교별 출제 경향과 학생의 실력을 분석해 꼭 필요한 공부를 설계하는 초·중·고 1:1 맞춤 과외 서비스입니다.",
  applicationName: "잇다과외",
  authors: [{ name: "잇다과외" }],
  creator: "잇다과외",
  publisher: "잇다과외",
  keywords: ["잇다과외", "잇다 과외", "It-da 과외", "학교별 맞춤 과외", "온라인 과외", "1:1 과외", "내신 과외", "학습 코칭"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "잇다과외",
    title: "잇다과외 | 학교별 1:1 맞춤 과외",
    description: "학교별 출제 경향과 학생의 실력을 분석해 꼭 필요한 공부를 설계하는 초·중·고 1:1 맞춤 과외 서비스입니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      "naver-site-verification": "c06dca173e4437da6cd5f822f85941839002bcca",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 antialiased">
        {children}
        <KakaoChannelButton />
      </body>
    </html>
  );
}

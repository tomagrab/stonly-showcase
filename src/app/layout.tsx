import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Drawer from "@/components/Layout/Drawer/Drawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Stonly widget - start */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.STONLY_WID = "0f7fc9f7-7d63-11ee-a0af-0a52ff1ec764";`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(s,t,o,n,l,y,w,g,d,e){s.StonlyWidget||((d=s.StonlyWidget=function(){
  d._api?d._api.apply(d,arguments):d.queue.push(arguments)}).scriptPath=n,d.apiPath=l,d.sPath=y,d.queue=[],
  (g=t.createElement(o)).async=!0,(e=new XMLHttpRequest).open("GET",n+"version?v="+Date.now(),!0),
  e.onreadystatechange=function(){4===e.readyState&&(g.src=n+"stonly-widget.js?v="+
  (200===e.status?e.responseText:Date.now()),(w=t.getElementsByTagName(o)[0]).parentNode.insertBefore(g,w))},e.send())
  }(window,document,"script","https://stonly.com/js/widget/v2/");`,
          }}
        />
        {/* Stonly widget - end */}
      </Head>
      <body className={inter.className}>
        <Drawer>{children}</Drawer>
      </body>
    </html>
  );
}

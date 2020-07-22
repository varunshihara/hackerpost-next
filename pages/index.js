// git remote add origin https://github.com/varunshihara/hackerpost-next.git
// git push -u origin master
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hacker Post</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="./assets/styles.css"></link>
      </Head>

      <main>
        <h1 className="title textCenter">HACKER POST</h1>
        <p className="textCenter">Working on something cool...coming soon.</p>
        {/* <p className="textCenter">YOUR IP : </p> */}
      </main>
    </div>
  );
}

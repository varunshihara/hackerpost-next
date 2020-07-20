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
        <h1 class="title textCenter">HACKER POST</h1>
        <p class="textCenter">Working on something cool...coming soon.</p>
        <p class="textCenter">YOUR IP : </p>
      </main>

      <style jsx>{`
        .container {
          // min-height: 100vh;
          // padding: 0 0.5rem;
          // display: flex;
          // flex-direction: column;
          // justify-content: center;
          // align-items: center;
        }
      `}</style>

      <style jsx global>{`
        // html,
        // body {
        //   padding: 0;
        //   margin: 0;
        //   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        //     Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
        //     sans-serif;
        // }

        // * {
        //   box-sizing: border-box;
        // }
      `}</style>
    </div>
  );
}

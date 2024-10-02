import 'bootstrap/dist/css/bootstrap.css'
 
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

<section className={styles.section}>
        <h2>Beautiful Pictures</h2>
        <div className={styles.imageGallery}>
          <Image
            src="/images/credlyBadge.png"
            alt="A scenic landscape"
            display= 'flex'
            position= 'absolute'
            width={200}
            height={100}
            className={styles.image}
            
          />
          <Image
            src="/images/weave.png"
            alt="A beautiful beach"
            width={400}
            height={300}
            className={styles.image}
          />
          <Image
            src="/images/webpages.png"
            alt="A forest trail"
            width={3000}
            height={1800}
            className={styles.image}
          />
        </div>
      </section>

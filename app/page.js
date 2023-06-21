import styles from "./styles/page.module.scss"

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Password Generator</h1>

        <section className={styles["result-container"]}>
          <input className={styles.result} type="text" placeholder="loremipsum" disabled />
        </section>
        
        <form className={styles["form-container"]}>
            <div className={styles["length-container"]}>
              <h3>Character Length</h3>
              <p>8</p>
              <input type="range" />
            </div>

            <div className={styles["checkboxes-container"]}>
              <input type="checkbox" name="uppercase" id="uppercase" />
              <label htmlFor="uppercase">Include Uppercase Letters</label>

              <input type="checkbox" name="lowercase" id="lowercase" />
              <label htmlFor="lowercase">Include Lowercase Letters</label>

              <input type="checkbox" name="numbers" id="numbers" />
              <label htmlFor="numbers">Include Numbers</label>

              <input type="checkbox" name="symbols" id="symbols" />
              <label htmlFor="symbols">Include Symbols</label>
            </div>

            <div className={styles["password-strength"]}>
              <span>Strength</span>
            </div>

            <button className={styles["btn-submit"]} type="submit">Generate</button>
        </form>

      </main>
    </div>
  )
}

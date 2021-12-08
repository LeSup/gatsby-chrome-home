import React from "react"
import * as styles from "../styles/index.module.less"

function MyInput() {
  return (
    <div className={styles.realBox}>
      <input
        type="search"
        className={styles.input}
        autoComplete="off"
        placeholder="在 Google 上搜索，或者输入一个网址"
      />
      <div className={styles.inputBefore}>
        <img src="/images/search.svg" alt="search" />
      </div>
      <div className={styles.inputAfter}>
        <img src="/images/googlemic_clr_24px.svg" alt="search" />
      </div>
    </div>
  )
}

export default MyInput

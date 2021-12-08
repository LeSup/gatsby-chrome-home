import React from "react"
import * as styles from "../styles/index.module.less"
import TagList from "../components/TagList"
import MyInput from "../components/MyInput"
import Modal from "../components/Modal"

export default function Home() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.logoBox}>
          <img src="./images/google_logo.svg" alt="Logo" />
        </div>
        <MyInput />
        <TagList />
      </div>
      <Modal />
    </>
  )
}

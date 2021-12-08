import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { show } from "../store/actions/modal.action"
import * as styles from "../styles/index.module.less"

function TagList() {
  const list = useSelector(state => state.listReducer.list)
  const dispatch = useDispatch()

  let columnCount =
    list.length < 5 ? list.length + 1 : list.length === 5 ? 3 : 4
  let width = columnCount * 124

  return (
    <div className={styles.tagList} style={{ columnCount, width }}>
      {list.map(item => (
        <a
          tragable="true"
          key={item.address}
          title={item.name}
          className={styles.tile}
          href={item.address}
        >
          {/* <div className={styles.icon}>
            <img src="/images/icon_more_vert.svg" alt="" />
          </div> */}
          <div className={styles.tileIcon}>
            <img src={item.address + "/favicon.ico"} alt=" " />
          </div>
          <div className={styles.tileTitle}>
            <span>{item.name}</span>
          </div>
        </a>
      ))}
      <button
        type="button"
        onClick={() => dispatch(show())}
        className={styles.addShortcut}
      >
        <div className={styles.tileIcon}>
          <img src="/images/add.svg" alt="add" />
        </div>
        <div className={styles.tileTitle}>
          <span>添加快捷方式</span>
        </div>
      </button>
    </div>
  )
}

export default TagList

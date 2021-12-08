import React from "react"
import useInput from "../hooks/useInput"
import * as styles from "../styles/index.module.less"
import { useDispatch, useSelector } from "react-redux"
import { create } from "../store/actions/list.action"
import { hide } from "../store/actions/modal.action"

function Modal() {
  const dispatch = useDispatch()
  const showStatus = useSelector(state => state.modalReducer.showStatus)
  const name = useInput("")
  const address = useInput("")

  const nameValue = name.input.value
  const addressValue = address.input.value
  let canSubmit =
    nameValue && nameValue.trim() && addressValue && addressValue.trim()

  function handleSubmit(e) {
    e.preventDefault()
    if (!canSubmit) {
      return
    }
    dispatch(create({ name: nameValue, address: addressValue }))
    name.setValue("")
    address.setValue("")
    dispatch(hide())
  }

  return (
    <div
      style={{ display: showStatus ? "block" : "none" }}
      className={styles.bgShadow}
    >
      <div className={styles.shadeBox}>
        <div className={styles.modalBox}>
          <div className={styles.modalTitle}>添加快捷方式</div>
          <form onSubmit={handleSubmit} className={styles.modalForm}>
            <fieldset className={styles.formField}>
              <label htmlFor="address">名称</label>
              <input id="name" type="text" autoComplete="off" {...name.input} />
            </fieldset>
            <fieldset className={styles.formField}>
              <label htmlFor="address">网址</label>
              <input
                id="address"
                type="text"
                autoComplete="off"
                {...address.input}
              />
            </fieldset>
            <div className={styles.formGroup}>
              <button
                type="button"
                onClick={() => dispatch(hide())}
                className={styles.normalButton}
              >
                取消
              </button>
              <button
                type="submit"
                className={
                  canSubmit ? styles.submitButton : styles.submitDisable
                }
              >
                提交
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal

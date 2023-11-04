import styles from "./alert.module.css";
import { useState } from "react";

export function Alert({
  text = "This is alert",
  onOpen = true,
  severity = "success",
  style = {}
}) {
  const [isOpen, setIsOpen] = useState(onOpen);
  const avatarStyles = {
    error: {
      width: "100%",
      backgroundColor: "rgb(253, 237, 237)",
      color: "rgb(95, 33, 32)"
    },
    warning: {
      width: "100%",
      backgroundColor: "rgb(255, 244, 229)",
      color: "rgb(102, 60, 0)"
    },
    info: {
      width: "100%",
      backgroundColor: "rgb(229, 246, 253)",
      color: "rgb(1, 67, 97)"
    },
    success: {
      width: "100%",
      backgroundColor: "rgb(237, 247, 237)",
      color: "rgb(30, 70, 32)"
    }
  };
  return (
    <>
      {isOpen && (
        <div
          style={{ ...avatarStyles[severity], ...style }}
          className={styles.alert}
        >
          <p className={styles.alertIcon}>
            {severity === "error" ? (
              <i className="fa-solid fa-circle-exclamation"></i>
            ) : severity === "warning" ? (
              <i className="fa-solid fa-triangle-exclamation"></i>
            ) : severity === "info" ? (
              <i className="fa-solid fa-circle-info"></i>
            ) : (
              <i className="fa-solid fa-circle-check"></i>
            )}
          </p>
          <main className={styles.alertMain}>
            <h3 className={styles.alertHeading}>
              {severity === "error" ? (
                <strong>Error</strong>
              ) : severity === "warning" ? (
                <strong>Warning</strong>
              ) : severity === "info" ? (
                <strong>Info</strong>
              ) : (
                <strong>Success</strong>
              )}
            </h3>
            <p className={styles.alertText}>{text}</p>
          </main>
          <button
            className={styles.closeAlertBtn}
            onClick={() => setIsOpen(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      )}
    </>
  );
}

export default Alert;

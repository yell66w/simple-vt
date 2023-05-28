import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { clearPopup, selectPopupValue } from "../../features/popup/popupSlice";
import styles from "./styles.module.css";
import Button from "../Button";

const Popup = () => {
  const value = useAppSelector(selectPopupValue);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(clearPopup());
  };
  return value ? (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.message}>
          <h4>{value}</h4>
          <Button onClick={handleClose} bgColor="yellow">
            Okay
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Popup;

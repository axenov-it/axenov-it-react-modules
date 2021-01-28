import classNames from "classnames";
import styles from "./styles.module.css";

interface Props {
  src: string;
  isChange: boolean;
  alt?: string;
}

const Active = ({ src, isChange, alt }: Props) => {
  const className = classNames(
    styles.active,
    { [styles.visable]: isChange },
    { [styles.hide]: !isChange }
  );

  return (
    <div className={className}>
      <img className={styles.active__img} src={src} alt={alt} />
    </div>
  );
};

export default Active;

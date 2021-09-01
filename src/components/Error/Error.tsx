import { FC } from "react";

// css
import "./Error.less";

// components
interface IErrorProps {
  err: string;
}

const ErrorCard: FC<IErrorProps> = ({ err }: IErrorProps) => {
  return (
    <div className="error">
      <div className="error-card">{err}</div>
    </div>
  );
};
export default ErrorCard;

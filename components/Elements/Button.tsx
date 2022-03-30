import { useRouter } from "next/router";
import {
  ButtonHTMLAttributes,
  FC,
  MouseEventHandler,
  useCallback,
  useMemo,
} from "react";

interface ButtonProps {
  size?: "small";
  navy?: boolean;
  variant?: "prmary" | "secondary";
  toAppealFlow?: boolean;
}

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  size,
  navy = false,
  variant = "primary",
  toAppealFlow,
  children,
  className: userClassName,
  ...buttonProps
}) => {
  const className = useMemo(() => {
    let val = userClassName ? userClassName + " " : "";
    switch (variant) {
      case "primary":
        val += " primary";
        break;
      case "secondary":
        val += " secondary";
        break;
    }

    if (navy) {
      val += " navy";
    }

    return val;
  }, [size, navy, userClassName]);

  const router = useRouter();

  const onClick: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    if (toAppealFlow) {
      router.push("/appeal", undefined, { shallow: true });
    }
  }, [toAppealFlow]);

  return (
    <button className={className} onClick={onClick} {...buttonProps}>
      <span>{children}</span>
    </button>
  );
};

export default Button;

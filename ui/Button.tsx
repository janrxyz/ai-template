import clsx from "clsx";

interface AdditionalButtonProps {
  kind?: "default" | "error";
  className?: string;
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  AdditionalButtonProps;

export default function Button({
  kind = "default",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-xl px-4 py-[6px] text-sm duration-200 disabled:bg-[#12104f] disabled:cursor-not-allowed",
        {
          "bg-pink-600 text-gray-100 hover:bg-pink-700 hover:text-white":
            kind === "default",
          "bg-red-600 text-red-50 hover:bg-red-500 hover:text-white":
            kind === "error",
        },
        className
      )}
      {...props}
    />
  );
}

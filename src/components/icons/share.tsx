import { cn } from "@/lib/utils";

export const Share = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[25px] w-[24px]", className)}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.803 5.83301C13.803 3.99301 15.303 2.50001 17.151 2.50001C17.5897 2.49896 18.0244 2.58433 18.4302 2.75126C18.8359 2.91819 19.2048 3.16341 19.5158 3.47291C19.8268 3.7824 20.0738 4.15012 20.2426 4.55507C20.4115 4.96002 20.499 5.39426 20.5 5.83301C20.5 7.67401 19 9.16701 17.151 9.16701C16.7076 9.16756 16.2685 9.07996 15.8592 8.90932C15.45 8.73868 15.0787 8.48839 14.767 8.17301L10.132 11.329C10.2611 11.972 10.1978 12.6388 9.95 13.246L15.032 16.586C15.6306 16.0978 16.3796 15.8318 17.152 15.833C17.5907 15.8321 18.0254 15.9176 18.4311 16.0846C18.8368 16.2517 19.2056 16.497 19.5165 16.8066C19.8274 17.1162 20.0743 17.484 20.243 17.889C20.4118 18.294 20.4991 18.7283 20.5 19.167C20.5 21.007 19 22.5 17.151 22.5C16.2651 22.5019 15.4147 22.1518 14.7869 21.5268C14.159 20.9017 13.8051 20.0529 13.803 19.167C13.8022 18.6996 13.9007 18.2374 14.092 17.811L9.05 14.5C8.43941 15.0309 7.65712 15.3226 6.848 15.321C6.40922 15.3221 5.97453 15.2366 5.56877 15.0696C5.16301 14.9026 4.79413 14.6573 4.48321 14.3477C4.17229 14.0381 3.92543 13.6702 3.75673 13.2652C3.58802 12.8601 3.50079 12.4258 3.5 11.987C3.50092 11.5483 3.58825 11.1141 3.75701 10.7091C3.92578 10.3042 4.17266 9.93648 4.48356 9.62697C4.79447 9.31746 5.1633 9.07223 5.569 8.90528C5.97469 8.73834 6.4093 8.65296 6.848 8.65401C7.912 8.65401 8.858 9.14701 9.471 9.91501L13.964 6.85601C13.8571 6.52554 13.8028 6.18034 13.803 5.83301Z"
        fill="currentColor"
        fillOpacity="0.5"
      />
    </svg>
  );
};
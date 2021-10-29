import clsx from "clsx";
import React from "react";

import { IconNoImage } from "~/components/atoms/Icon";
import { useTranslation } from "~/i18n/useTranslation";

export const NotSelected: React.VFC<{ className?: string; }> = ({ className }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        ["w-full"],
        ["h-full"],
        [["px-2"], ["py-8"]],
        ["flex", ["flex-col"], ["items-center"], ["justify-center"]],
        ["bg-gray-400"],
        ["select-none"],
      )}
    >
      <IconNoImage
        className={clsx(["text-white"], ["text-lg"])}
      />
      <span
        className={clsx(["hidden", "sm:block"], ["mt-2"], ["text-xs"], ["text-white"])}
      >
        {LL.CreateHenkenForm.Content.Image.NotSelected()}
      </span>
    </div>
  );
};

"use client";

import { useTranslation } from "@/lib/i18n-next/use-translation";

export const Banner = () => {
  const { t } = useTranslation(["banner"]);
  return (
    <section>
      <h1 className="text-center text-2xl mt-8 mb-4 font-bold">
        {t("banner:brand.title")}
      </h1>

      <p className="text-center">{t("banner:brand.subtitle")}</p>
    </section>
  );
};

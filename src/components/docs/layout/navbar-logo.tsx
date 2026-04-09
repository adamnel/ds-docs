"use client";

import { DynamicLink } from "@/components/ui/dynamic-link";
import { withBasePath } from "@/utils/base-path";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

interface NavbarLogoProps {
  navigationDocsData: any;
}

export const NavbarLogo = ({ navigationDocsData }: NavbarLogoProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const lightLogo = navigationDocsData[0]?.lightModeLogo;
  const darkLogo = navigationDocsData[0]?.darkModeLogo || lightLogo;
  const resolvedLightLogo = withBasePath(lightLogo);
  const resolvedDarkLogo = withBasePath(darkLogo);

  return (
    <DynamicLink href="/docs" isFullWidth={true}>
      <div className="relative md:w-[120px] w-[90px] h-[40px]">
        {mounted ? (
          <>
            <Image
              src={
                resolvedTheme === "dark" ? resolvedDarkLogo : resolvedLightLogo
              }
              alt="Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 90px, 120px"
            />
            {/* Preload the other logo */}
            <Image
              src={
                resolvedTheme === "dark" ? resolvedLightLogo : resolvedDarkLogo
              }
              alt=""
              fill
              className="hidden"
              priority
            />
          </>
        ) : (
          <div className="w-full h-full animate-pulse opacity-20" />
        )}
      </div>
    </DynamicLink>
  );
};

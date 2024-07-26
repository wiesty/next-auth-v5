"use server";
import { cookies, headers } from "next/headers";
import i18nUtil from "@/lib/i18n";

export const RegisterCookiesforLanguage = async () => {
  const cookieStore = cookies();
  const language = cookieStore.get("language");
  if (!language) {
    const headersList = headers();
    const headers_accept_language = headersList.get("accept-language");
    const requestLanguage = headers_accept_language
      ? i18nUtil.getLanguageFromAcceptHeader(headers_accept_language)
      : "en";
    if (requestLanguage && i18nUtil.isLanguageSupported(requestLanguage)) {
      console.log(requestLanguage + " is supported");
      // RegisterLanguageCookies(requestLanguage);
      cookies().set("language", requestLanguage, {
        sameSite: "lax",
        expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      });
    } else {
      console.log(requestLanguage + " is not supported.");
    }
  }
};

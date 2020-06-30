type Locale = "ar" | "en";

const localesDir = `${__dirname}/../app/locales/`;

class Translation {
  private locale: Locale;

  constructor(locale: Locale) {
    this.setLocale(locale);
  }

  private setLocale(locale: Locale) {
    this.locale = locale;
    return this;
  }

  private getLocale(): Locale {
    return this.locale;
  }

  public getMessage(message: string): string {
    const locale = require(`${localesDir}${this.getLocale()}.json`);

    if (locale[message]) return locale[message];
    else return locale.__DEFAULT;
  }
}

export default Translation;

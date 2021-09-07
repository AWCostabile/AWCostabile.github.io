import { ILanguageData } from "common/models/language";

type LanguageType = ILanguageData & { name: string; nameEnglish: string };

export class Languages<
  LanguageData extends LanguageType = LanguageType,
  LanguageName extends string = string
> {
  private currentLanguage: LanguageName;
  private languages: Record<LanguageName, LanguageData>;

  constructor(
    languages: Record<LanguageName, LanguageData>,
    currentLanguage: LanguageName = Object.keys(languages)[0] as LanguageName
  ) {
    this.currentLanguage = currentLanguage;
    this.languages = languages;
  }

  public get meta() {
    return (Object.keys(this.languages) as LanguageName[]).map((value) => ({
      friendly: this.languages[value].nameEnglish,
      label: this.languages[value].name,
      value,
    }));
  }

  public get strings() {
    return this.languages[this.currentLanguage] as LanguageData;
  }

  public is = (language: string) => {
    return language === this.currentLanguage;
  };

  public set = (nextLanguage: LanguageName) => {
    this.currentLanguage = nextLanguage;
    return this;
  };
}

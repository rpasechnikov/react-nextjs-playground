export type NewPage = Omit<Page, "id">;

export type Page = {
  id: string;
  title: string;
  description: string;
};

export type PageDetail = Page & {};

export type PageSection = {
  id: string;
};

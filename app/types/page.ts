export type NewPage = Omit<Page, "id">;

export type Page = {
  id: number;
  title: string;
  description: string | null;
};

export type PageDetail = Page & {};

export type PageSection = {
  id: string;
  heading: string;
  content: string;
};

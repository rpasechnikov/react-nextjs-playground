import { Page } from "@/app/types";
import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  return NextResponse.json(await createNewPage(body), {
    status: 200,
  });
};

const createNewPage = async (newPage: Omit<Page, "id">): Promise<Page> => {
  const page = await db.page.create({
    data: { title: newPage.title, description: newPage.description },
  });

  return {
    id: page.id,
    title: page.title,
    description: page.description,
  };
};

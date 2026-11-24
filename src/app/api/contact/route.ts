import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, sujet, message } = body ?? {};

    if (!nom || !email || !sujet || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Votre message a bien été enregistré. L’équipe de l’IGD vous répondra sous 24 à 72h.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }
}

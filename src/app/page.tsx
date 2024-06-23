"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Index() {
  const [dark, setDark] = useState(true);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    dark ? setTheme("dark") : setTheme("light");
  });

  return (
    <main className="flex h-screen">
      <div className="m-auto flex flex-col justify-center items-center">
        <h1 className="text-3xl uppercase tracking-widest">Toserba</h1>
        <Button variant="bordered" onClick={() => setDark(!dark)}>
          <span>It's {theme}.</span>
        </Button>
      </div>
    </main>
  );
}

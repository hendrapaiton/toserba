import { Button } from "@nextui-org/react";
import { LuShoppingCart } from "react-icons/lu";

export function Cart() {
  return (
    <>
      <Button isIconOnly size="lg" variant="solid" radius="full" className="bg-main-red-barn text-white">
        <LuShoppingCart className="w-5 h-5" />
      </Button>
    </>
  );
}

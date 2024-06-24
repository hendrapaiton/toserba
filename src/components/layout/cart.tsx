import { Button } from "@nextui-org/react";
import { LuShoppingCart } from "react-icons/lu";

export function Cart() {
  return (
    <>
      <Button isIconOnly color="danger" variant="solid"  radius="full">
        <LuShoppingCart className="w-5 h-5" />
      </Button>
    </>
  );
}

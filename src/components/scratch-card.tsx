import { Button } from "@/components/ui/button";

// Scratch component for a live test of fixed-finding marks. Not used anywhere.
export function ScratchCard() {
  return (
    <div className="rounded-[12px] border p-[18px]">
      <p className="text-destructive">One</p>
      <p className="text-amber-600">Two</p>
      <p className="bg-red-500">Three</p>
      <div className="mt-[18px]">Four</div>
      <div className="gap-4">Five</div>
      <div className="flex px-[18px]">Six</div>
      <div className="py-4">Seven</div>
      <div className="rounded-[14px]">Nine</div>
      <div className="rounded-[10px]">Ten</div>
      <p className="text-orange-600">Eleven</p>
      <p className="bg-amber-500">Twelve</p>
      <p className="border-red-500">Thirteen</p>
      <div className="flex ml-[18px]">Fourteen</div>
      <Button>Save</Button>
      <div className="pt-4">Fifteen</div>
      <div className="flex pl-[18px]">Seventeen</div>
      <div className="pr-4">Eighteen</div>
      <div className="flex mx-[18px]">Twenty</div>
    </div>
  );
}

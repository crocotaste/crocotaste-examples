import { Button } from "@/components/ui/button";

// Scratch component for a live test of fixed-finding marks. Not used anywhere.
export function ScratchCard() {
  return (
    <div className="rounded-[12px] border p-[18px]">
      <p className="text-red-600">One</p>
      <p className="text-amber-600">Two</p>
      <p className="bg-red-500">Three</p>
      <div className="mt-4">Four</div>
      <div className="gap-4">Five</div>
      <div className="flex px-[18px]">Six</div>
      <div className="py-[18px]">Seven</div>
      <div className="mb-[18px]">Eight</div>
      <div className="rounded-[14px]">Nine</div>
      <div className="rounded-[10px]">Ten</div>
      <p className="text-orange-600">Eleven</p>
      <p className="bg-amber-500">Twelve</p>
      <p className="border-red-500">Thirteen</p>
      <div className="ml-[18px]">Fourteen</div>
      <Button>Save</Button>
      <div className="pt-[18px]">Fifteen</div>
      <div className="pb-[18px]">Sixteen</div>
      <div className="pl-[18px]">Seventeen</div>
      <div className="pr-[18px]">Eighteen</div>
      <div className="mr-[18px]">Nineteen</div>
      <div className="mx-[18px]">Twenty</div>
    </div>
  );
}
